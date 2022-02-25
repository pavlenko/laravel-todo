<?php

namespace App\Services;

use App\DTO\DeskDTO;
use App\DTO\ListDTO;
use App\Models\DeskModel;
use App\Models\ListModel;

final class Desks extends BaseManager
{
    private CardsManager $cards;
    private TasksManager $tasks;

    public function __construct(?CardsManager $cards = null, ?TasksManager $tasks = null)
    {
        $this->cards = $cards ?: new CardsManager();
        $this->tasks = $tasks ?: new TasksManager();
    }

    /**
     * @return array<DeskDTO>
     */
    public function getAllDesk(bool $withLists = false): array
    {
        $query = DeskModel::query()->orderBy('updated_at', 'desc');
        if ($withLists) {
            $query->with('lists');
        }

        /* @var $rows DeskModel[] */
        $rows = $query->get();
        $data = [];
        foreach ($rows as $row) {
            $data[] = $this->createDesk(
                $row->getAttributes(),
                $withLists
                    ? $this->sortByPrevNext(array_map(fn(array $item) => $this->createList($item), $row->lists->toArray()))
                    : []
            );
        }

        return $data;
    }

    public function getOneDesk(int $deskID, bool $withLists = false): ?DeskDTO
    {
        $query = DeskModel::query();
        if ($withLists) {
            $query->with('lists');
        }

        /* @var $data DeskModel */
        $data = $query->find($deskID);
        if (null === $data) {
            return null;
        }

        return $this->createDesk(
            $data->getAttributes(),
            $withLists
                ? $this->sortByPrevNext(array_map(fn(array $item) => $this->createList($item), $data->lists->toArray()))
                : []
        );
    }

    public function createDesk(array $attributes, array $lists = []): DeskDTO
    {
        return new DeskDTO($attributes, $lists);
    }

    public function insertDesk(DeskDTO $desk): void
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
        $this->tasks->deleteTasksByDesk($desk->id);
        $this->cards->deleteCardsByDesk($desk->id);
        ListModel::query()->where('desk_id', $desk->id)->delete();
        DeskModel::query()->whereKey($desk->id)->delete();
    }

    public function getAllList(int $deskID, bool $withCards = false): array
    {
        $query = ListModel::query()->where('desk_id', $deskID);
        if ($withCards) {
            $query->with('cards');
        }

        /* @var $rows ListModel[] */
        $rows = $query->get();
        $data = [];

        foreach ($rows as $row) {
            $data[] = $this->createList(
                $row->getAttributes(),
                $withCards
                    ? $this->sortByPrevNext(array_map(fn(array $item) => $this->createCard($item), $row->cards->toArray()))
                    : []
            );
        }

        return $this->sortByPrevNext($data);
    }

    public function getOneList(int $listID, bool $withCards = false): ?ListDTO
    {
        $query = ListModel::query();
        if ($withCards) {
            $query->with('cards');
        }

        /* @var $data ListModel */
        $data = $query->find($listID);
        if (null === $data) {
            return null;
        }

        return $this->createList(
            $data->getAttributes(),
            $withCards
                ? $this->sortByPrevNext(array_map(fn(array $item) => $this->createCard($item), $data->cards->toArray()))
                : []
        );
    }

    public function createList(array $attributes, array $cards = []): ListDTO
    {
        return new ListDTO($attributes, $cards);
    }

    public function insertList(ListDTO $list): void
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
        $this->tasks->deleteTasksByList($list->id);
        $this->cards->deleteCardsByList($list->id);
        ListModel::query()->whereKey($list->id)->delete();
        $this->onDeleteSortable($list, new ListModel());
    }
}
