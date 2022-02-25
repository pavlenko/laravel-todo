<?php

namespace App\Services;

use App\DTO\CardDTO;
use App\DTO\DeskDTO;
use App\DTO\ListDTO;
use App\Models\CardModel;
use App\Models\DeskModel;
use App\Models\ListModel;

final class Desks extends BaseManager
{
    private TasksManager $tasks;

    public function __construct(?TasksManager $tasks = null)
    {
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
        CardModel::query()
            ->leftJoin('lists', 'list.id', '=', 'cards.list_id')
            ->where('lists.desk_id', $desk->id)
            ->delete();
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
        CardModel::query()->where('list_id', $list->id)->delete();
        ListModel::query()->whereKey($list->id)->delete();
        $this->onDeleteSortable($list, new ListModel());
    }

    public function getAllCard(int $listID, bool $withTasks = false): array
    {
        $query = CardModel::query()->where('list_id', $listID);
        if ($withTasks) {
            $query->with('tasks');
        }

        /* @var $rows CardModel[] */
        $rows = $query->get();
        $data = [];

        foreach ($rows as $row) {
            $data[] = $this->createCard(
                $row->getAttributes(),
                $withTasks
                    ? $this->sortByPrevNext(array_map(fn(array $item) => $this->tasks->createTask($item), $row->tasks->toArray()))
                    : []
            );
        }

        return $this->sortByPrevNext($data);
    }

    public function getOneCard(int $cardID, bool $withTasks = false): ?CardDTO
    {
        $query = CardModel::query()->whereKey($cardID);
        if ($withTasks) {
            $query->with('tasks');
        }

        /* @var $data CardModel */
        $data = $query->first();
        if (null === $data) {
            return null;
        }

        return $this->createCard(
            $data->getAttributes(),
            $withTasks
                ? $this->sortByPrevNext(array_map(fn(array $item) => $this->tasks->createTask($item), $data->tasks->toArray()))
                : []
        );
    }

    public function createCard(array $attributes, array $tasks = []): CardDTO
    {
        return new CardDTO($attributes, $tasks);
    }

    public function insertCard(CardDTO $card): void
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
        $this->tasks->deleteTasksByCard($card->id);
        CardModel::query()->whereKey($card->id)->delete();
        $this->onDeleteSortable($card, new CardModel());
    }
}
