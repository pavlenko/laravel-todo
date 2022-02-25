<?php

namespace App\Services;

use App\DTO\ListDTO;
use App\Models\ListModel;

final class ListsManager extends BaseManager
{
    private CardsManager $cards;
    private TasksManager $tasks;

    public function __construct(?CardsManager $cards = null, ?TasksManager $tasks = null)
    {
        $this->cards = $cards ?: new CardsManager();
        $this->tasks = $tasks ?: new TasksManager();
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
                    ? $this->sortByPrevNext(array_map(fn(array $item) => $this->cards->createCard($item), $row->cards->toArray()))
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
                ? $this->sortByPrevNext(array_map(fn(array $item) => $this->cards->createCard($item), $data->cards->toArray()))
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

    public function deleteListsByDesk(int $deskID): void
    {
        ListModel::query()->where('desk_id', $deskID)->delete();
    }

    public function deleteList(ListDTO $list): void
    {
        $this->tasks->deleteTasksByList($list->id);
        $this->cards->deleteCardsByList($list->id);
        ListModel::query()->whereKey($list->id)->delete();
        $this->onDeleteSortable($list, new ListModel());
    }
}