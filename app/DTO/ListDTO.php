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
}
