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
    public function attributes(): array
    {
        return [
            'id',
            'name',
            'created_at',
            'updated_at',
        ];
    }
}
