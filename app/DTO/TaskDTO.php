<?php

namespace App\DTO;

/**
 * @property $id
 * @property $card_id
 * @property $prev
 * @property $next
 * @property $name
 * @property $status
 * @property $created_at
 * @property $updated_at
 */
final class TaskDTO extends BaseDTO
{
    public function attributes(): array
    {
        return [
            'id',
            'card_id',
            'prev',
            'next',
            'name',
            'status',
            'created_at',
            'updated_at',
        ];
    }
}
