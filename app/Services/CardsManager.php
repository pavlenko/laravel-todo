<?php

namespace App\Services;

use App\DTO\CardDTO;
use App\Models\CardModel;

final class CardsManager extends BaseManager
{
    private TasksManager $tasks;

    public function __construct(?TasksManager $tasks = null)
    {
        $this->tasks = $tasks ?: new TasksManager();
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

    public function deleteCardsByDesk(int $deskID): void
    {
        CardModel::query()
            ->join('lists', 'list.id', '=', 'cards.list_id', 'left')
            ->where('lists.desk_id', $deskID)
            ->delete();
    }

    public function deleteCardsByList(int $listID): void
    {
        CardModel::query()->where('list_id', $listID)->delete();
    }

    public function deleteCard(CardDTO $card): void
    {
        $this->tasks->deleteTasksByCard($card->id);
        CardModel::query()->whereKey($card->id)->delete();
        $this->onDeleteSortable($card, new CardModel());
    }
}
