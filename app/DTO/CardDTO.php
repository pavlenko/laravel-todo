<?php

namespace App\DTO;

/**
 * @property $id
 * @property $list_id
 * @property $prev
 * @property $next
 * @property $name
 * @property $text
 * @property $created_at
 * @property $updated_at
 *
 * @property TaskDTO[] $tasks
 */
final class CardDTO extends BaseSortableDTO
{
    public array $tasks = [];

    public function __construct(array $values, array $tasks = [])
    {
        parent::__construct($values);
        $this->setTasks($tasks);
    }

    /**
     * @return TaskDTO[]
     */
    public function getTasks(): array
    {
        return $this->tasks;
    }

    /**
     * @param TaskDTO[] $tasks
     */
    public function setTasks(array $tasks): void
    {
        $this->tasks = [];
        foreach ($tasks as $index => $item) {
            if (!($item instanceof ListDTO)) {
                throw new \InvalidArgumentException(sprintf(
                    'Lists item must be of type %s, got %s at index \'%s\'',
                    TaskDTO::class,
                    is_object($item) ? get_class($item) : gettype($item),
                    $index
                ));
            }
            $this->tasks[] = $item;
        }
    }

    public function attributes(): array
    {
        return [
            'id'         => null,
            'list_id'    => null,
            'prev'       => null,
            'next'       => null,
            'name'       => null,
            'text'       => null,
            'created_at' => null,
            'updated_at' => null,
        ];
    }

    public function toArray(): array
    {
        return parent::toArray() + ['tasks' => $this->tasks];
    }
}
