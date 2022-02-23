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
 */
final class CardDTO extends BaseSortableDTO
{
    public array $tasks = [];

    public function __construct(array $values, array $tasks = [])
    {
        parent::__construct($values);
        $this->tasks = $tasks;
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
