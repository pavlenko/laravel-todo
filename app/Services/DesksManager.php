<?php

namespace App\Services;

use App\DTO\DeskDTO;
use App\Models\DeskModel;
use App\Models\ListModel;

final class DesksManager extends BaseManager
{
    private ListsManager $lists;
    private CardsManager $cards;
    private TasksManager $tasks;

    public function __construct(?ListsManager $lists = null, ?CardsManager $cards = null, ?TasksManager $tasks = null)
    {
        $this->lists = $lists ?: new ListsManager();
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
            $data[] = $this->createDeskFromModel($row, $withLists);
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

        return $this->createDeskFromModel($data, $withLists);
    }

    public function createDeskFromModel(DeskModel $model, bool $withLists = false): DeskDTO
    {
        $lists = $withLists
            ? array_map(fn(ListModel $item) => $this->lists->createListFromModel($item), $model->lists->all())
            : [];

        return $this->createDeskFromArray($model->getAttributes(), $lists);
    }

    public function createDeskFromArray(array $attributes, array $lists = []): DeskDTO
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
        $this->lists->deleteListsByDesk($desk->id);
        DeskModel::query()->whereKey($desk->id)->delete();
    }
}
