<?php

namespace App\DTO;

/**
 * @property $id
 * @property $name
 * @property $created_at
 * @property $updated_at
 */
final class DeskDTO extends BaseDTO
{
    public array $lists = [];

    public function __construct(array $values, array $lists = [])
    {
        parent::__construct($values);
        $this->lists = $lists;
    }

    public function attributes(): array
    {
        return [
            'id'         => null,
            'name'       => null,
            'created_at' => null,
            'updated_at' => null,
        ];
    }

    public function toArray(): array
    {
        return parent::toArray() + ['lists' => $this->lists];
    }
}
