<?php

namespace App\DTO;

/**
 * @property $id
 * @property $desk_id
 * @property $prev
 * @property $next
 * @property $name
 * @property $created_at
 * @property $updated_at
 */
final class ListDTO extends BaseSortableDTO
{
    public array $cards = [];

    public function __construct(array $values, array $cards = [])
    {
        parent::__construct($values);
        $this->cards = $cards;
    }

    public function attributes(): array
    {
        return [
            'id'         => null,
            'desk_id'    => null,
            'prev'       => null,
            'next'       => null,
            'name'       => null,
            'created_at' => null,
            'updated_at' => null,
        ];
    }

    public function toArray(): array
    {
        return parent::toArray() + ['cards' => $this->cards];
    }
}
