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
final class ListDTO extends BaseDTO
{
    public array $cards = [];

    public function __construct(array $values, array $cards)
    {
        parent::__construct($values);
        $this->cards = $cards;
    }

    public function attributes(): array
    {
        return [
             'id',
             'desk_id',
             'prev',
             'next',
             'name',
             'created_at',
             'updated_at',
        ];
    }

    public function toArray(): array
    {
        return parent::toArray() + ['cards' => $this->cards];
    }
}
