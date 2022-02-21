<?php

namespace App\Services;

use App\DTO\BaseSortableDTO;
use App\DTO\CardDTO;
use App\DTO\DeskDTO;
use App\DTO\ListDTO;
use App\DTO\TaskDTO;
use App\Models\CardModel;
use App\Models\DeskModel;
use App\Models\ListModel;
use App\Models\TaskModel;
use Illuminate\Database\Eloquent\Model;

final class Desks
{
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
                    ? $this->sortByPrevNext(array_map(fn(ListModel $item) => $this->createList($item->getAttributes()), $row->lists))
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
                ? $this->sortByPrevNext(array_map(fn(ListModel $item) => $this->createList($item->getAttributes()), $data->lists))
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
        TaskModel::query()
            ->leftJoin('cards', 'cards.id', '=', 'tasks.card_id')
            ->leftJoin('lists', 'list.id', '=', 'cards.list_id')
            ->where('lists.desk_id', $desk->id)
            ->delete();
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
                    ? $this->sortByPrevNext(array_map(fn(CardModel $item) => $this->createCard($item->getAttributes()), $row->cards))
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
                ? $this->sortByPrevNext(array_map(fn(CardModel $item) => $this->createCard($item->getAttributes()), $data->cards))
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
        TaskModel::query()
            ->leftJoin('cards', 'cards.id', '=', 'tasks.card_id')
            ->where('cards.list_id', $list->id)
            ->delete();
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
                    ? $this->sortByPrevNext(array_map(fn(TaskModel $item) => $this->createTask($item->getAttributes()), $row->tasks))
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
                ? $this->sortByPrevNext(array_map(fn(TaskModel $item) => $this->createTask($item->getAttributes()), $data->tasks))
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
        TaskModel::query()->where('card_id', $card->id)->delete();
        CardModel::query()->whereKey($card->id)->delete();
        $this->onDeleteSortable($card, new CardModel());
    }

    public function getAllTask(int $cardID): array
    {
        $rows = TaskModel::query()->where('card_id', $cardID)->get();
        $data = [];

        foreach ($rows as $row) {
            $data[] = $this->createTask($row->getAttributes());
        }

        return $this->sortByPrevNext($data);
    }

    public function getOneTask(int $taskID): ?TaskDTO
    {
        $card = TaskModel::query()->whereKey($taskID)->first();
        return null !== $card ? new TaskDTO($card->getAttributes()) : null;
    }

    public function createTask(array $attributes): TaskDTO
    {
        return new TaskDTO($attributes);
    }
    public function insertTask(TaskDTO $task): void
    {
        $data = TaskModel::query()->create($task->getAttributes());
        $task->setAttributes($data->getAttributes());
        $this->onCreateSortable($task, new TaskModel());
    }

    public function updateTask(TaskDTO $task): void
    {
        TaskModel::query()->whereKey($task->id)->update($task->getAttributes());
        $this->onUpdateSortable($task, new TaskModel());
    }

    public function deleteTask(TaskDTO $task): void
    {
        TaskModel::query()->whereKey($task->id)->delete();
        $this->onDeleteSortable($task, new TaskModel());
    }

    /**
     * @param BaseSortableDTO[] $data
     * @return BaseSortableDTO[]
     */
    protected function sortByPrevNext(array $data): array
    {
        if (empty($data)) {
            return [];
        }

        /* @var $first BaseSortableDTO */
        $first  = current(array_filter($data, fn($item) => $item->prev == 0));
        $result = [$first];

        $findByID = function(array $data, int $id) {
            return current(array_filter($data, fn($item) => $item->id == $id)) ?: null;
        };

        /* @var $item BaseSortableDTO */
        $id = $first->next;
        while ($item = $findByID($data, $id)) {
            $result[] = $item;
            $id = $item->next;
        }

        return $result;
    }

    private function onCreateSortable(BaseSortableDTO $dto, Model $model): void
    {
        // Update new position
        $model::query()->whereKey($dto->prev)->update(['next' => $dto->id]);
    }

    private function onUpdateSortable(BaseSortableDTO $dto, Model $model): void
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

    private function onDeleteSortable(BaseSortableDTO $dto, Model $model): void
    {
        // Update old position
        $model::query()->whereKey($dto->prev)->update(['next' => $dto->next ?? 0]);
        $model::query()->whereKey($dto->next)->update(['prev' => $dto->prev ?? 0]);
    }
}
