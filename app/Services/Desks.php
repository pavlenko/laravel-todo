<?php

namespace App\Services;

use App\DTO\DeskDTO;
use App\DTO\ListDTO;
use App\Models\DeskModel;
use App\Models\ListModel;

final class Desks
{
    /**
     * @return array<DeskDTO>
     */
    public function fetchAll(): array
    {
        $rows = DeskModel::query()->orderBy('updated_at', 'desc')->get();
        $data = [];
        foreach ($rows as $row) {
            $data[] = new DeskDTO($row->getAttributes());
        }

        return $data;
    }

    public function fetchRow($params): ?DeskDTO
    {
        if (!is_array($params)) {
            $data = DeskModel::query()->find($params);
        } else {
            $data = DeskModel::query()->where($params)->first();
        }

        return null !== $data ? new DeskDTO($data->getAttributes()) : null;
    }

    public function createDesk(DeskDTO $desk): void
    {
        $data = DeskModel::query()->create($desk->getAttributes());
        $desk->setAttributes($data->getAttributes());
    }

    public function updateDesk(DeskDTO $desk): void
    {
        DeskModel::query()->whereKey($desk->id)->update($desk->getAttributes());
    }

    public function deleteDesk(DeskDTO $desk): void
    {
        DeskModel::query()->whereKey($desk->id)->delete();
    }

    public function getLists(int $deskID): array
    {
        $rows = ListModel::query()->where('desk_id', $deskID)->get();
        $data = [];

        foreach ($rows as $row) {
            $data[] = new ListDTO($row->getAttributes());
        }

        return $this->sortByPrevNext($data);
    }

    public function getList(int $listID): ?ListDTO
    {
        $data = ListModel::query()->find($listID);
        return null !== $data ? new ListDTO($data->getAttributes()) : null;
    }

    public function createList(ListDTO $list): void
    {
        $data = ListModel::query()->create($list->getAttributes());
        $list->setAttributes($data->getAttributes());

        // Update prev record if any
        ListModel::query()->whereKey($list->prev)->update(['next' => $list->id]);
    }

    public function updateList(ListDTO $list): void
    {}

    public function deleteList(ListDTO $list): void
    {
        ListModel::query()->whereKey($list->id)->delete();

        ListModel::query()->whereKey($list->prev)->update(['next' => $list->next ?? 0]);
        ListModel::query()->whereKey($list->next)->update(['prev' => $list->prev ?? 0]);
    }

    protected function sortByPrevNext(array $data): array
    {
        if (empty($data)) {
            return [];
        }

        $first  = current(array_filter($data, fn($item) => $item->prev == 0));
        $result = [$first];

        $findByID = function(array $data, int $id) {
            return current(array_filter($data, fn($item) => $item->id == $id)) ?: null;
        };

        $id = $first->next;
        while ($item = $findByID($data, $id)) {
            $result[] = $item;
            $id = $item->next;
        }

        return $result;
    }
}
