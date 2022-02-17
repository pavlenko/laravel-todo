<?php

namespace App\Services;

use App\DTO\BaseDTO;
use App\DTO\CardDTO;
use App\DTO\DeskDTO;
use App\DTO\ListDTO;
use App\Models\CardModel;
use App\Models\DeskModel;
use App\Models\ListModel;
use Illuminate\Database\Eloquent\Model;

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
        $this->onCreateSortable($list, new ListModel());
    }

    public function updateList(ListDTO $list): void
    {
        ListModel::query()->whereKey($list->id)->update($list->getAttributes());
        $this->onUpdateSortable($list, new ListModel());
    }

    public function deleteList(ListDTO $list): void
    {
        ListModel::query()->whereKey($list->id)->delete();
        $this->onDeleteSortable($list, new ListModel());
    }

    public function getAllCard(int $listID): array
    {
        $rows = CardModel::query()->where('list_id', $listID)->get();
        $data = [];

        foreach ($rows as $row) {
            $data[] = new CardDTO($row->getAttributes());
        }

        return $this->sortByPrevNext($data);
    }

    public function getOneCard(int $cardID): ?CardDTO
    {
        $card = CardModel::query()->whereKey($cardID)->first();
        return null !== $card ? new CardDTO($card->getAttributes()) : null;
    }

    //TODO rename to insertCard and createCard must instantiate dto from attributes
    public function createCard(CardDTO $card): void
    {
        $data = CardModel::query()->create($card->getAttributes());
        $card->setAttributes($data->getAttributes());
        $this->onCreateSortable($card, new CardModel());
    }

    public function updateCard(CardDTO $card): void
    {
        CardModel::query()->whereKey($card->id)->update($card->getAttributes());
        $this->onUpdateSortable($card, new CardModel());
    }

    public function deleteCard(CardDTO $card): void
    {
        CardModel::query()->whereKey($card->id)->delete();
        $this->onDeleteSortable($card, new CardModel());
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

    private function onCreateSortable(BaseDTO $dto, Model $model): void
    {
        // Update new position
        $model::query()->whereKey($dto->prev)->update(['next' => $dto->id]);
    }

    private function onUpdateSortable(BaseDTO $dto, Model $model): void
    {
        // Skip if not changed
        if (!$dto->isChanged('prev') && !$dto->isChanged('next')) {
            return;
        }

        // Update old position
        $srcPrev = (int) $dto->getOldValue('prev');
        $srcNext = (int) $dto->getOldValue('next');

        $model::query()->whereKey($srcPrev)->update(['next' => $srcNext]);
        $model::query()->whereKey($srcNext)->update(['prev' => $srcPrev]);

        // Update new position
        $model::query()->whereKey($dto->prev)->update(['next' => $dto->id]);
        $model::query()->whereKey($dto->next)->update(['prev' => $dto->id]);
    }

    private function onDeleteSortable(BaseDTO $dto, Model $model): void
    {
        // Update old position
        $model::query()->whereKey($dto->prev)->update(['next' => $dto->next ?? 0]);
        $model::query()->whereKey($dto->next)->update(['prev' => $dto->prev ?? 0]);
    }
}
