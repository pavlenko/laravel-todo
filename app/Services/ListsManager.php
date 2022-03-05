<?php

namespace App\Services;

use App\DTO\CardDTO;
use App\DTO\ListDTO;
use App\Models\ListModel;
use Illuminate\Database\Eloquent\Builder;

final class ListsManager extends BaseManager
{
    private CardsManager $cards;
    private TasksManager $tasks;

    public function __construct(?CardsManager $cards = null, ?TasksManager $tasks = null)
    {
        $this->cards = $cards ?: new CardsManager();
        $this->tasks = $tasks ?: new TasksManager();
    }

    private function createQuery(array $where, bool $withCards = false): Builder
    {
        $query = ListModel::query();
        if ($withCards) {
            $query->with('cards');
        }
        if (isset($where['desk_id'])) {
            return $query->whereIn('desk_id', (array) $where['desk_id']);
        }
        return $query->where($where);
    }

    public function getListsBy(array $where, bool $withCards = false): array
    {
        $data = [];
        $rows = $this->createQuery($where, $withCards)->get();

        if (isset($where['desk_id']) && is_array($where['desk_id'])) {
            $rows = $rows->groupBy('desk_id');
        } else {
            $rows = [$where['desk_id'] => $rows];
        }

        /* @var $rows ListModel[][] */
        foreach ($rows as $groupID => $items) {
            $data[$groupID] = $data[$groupID] ?? [];

            foreach ($items as $item) {
                $data[$groupID][] = $this->createListFromModel($item);
            }

            $data[$groupID] = $this->sortByPrevNext($data[$groupID]);
        }

        return array_merge(...$data);
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
            $data[] = $this->createListFromModel($row, $withCards);
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

        return $this->createListFromModel($data, $withCards);
    }

    public function createListFromModel(ListModel $model, bool $withCards = false): ListDTO
    {
        $cards = $withCards
            ? array_map(fn(CardDTO $item) => $this->cards->createCard($item), $model->cards->all())
            : [];

        return $this->createListFromArray($model->getAttributes(), $this->sortByPrevNext($cards));
    }

    public function createListFromArray(array $attributes, array $cards = []): ListDTO
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
