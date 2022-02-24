<?php

namespace App\Services;

use App\DTO\TaskDTO;
use App\Models\TaskModel;

//TODO query tasks by desk(s)/list(s)/card(s)
final class TasksManager extends BaseManager
{
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
}
