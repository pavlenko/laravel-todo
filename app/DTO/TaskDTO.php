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
final class TaskDTO extends BaseSortableDTO
{
    public function attributes(): array
    {
        return [
            'id'         => null,
            'card_id'    => null,
            'prev'       => null,
            'next'       => null,
            'name'       => null,
            'status'     => null,
            'created_at' => null,
            'updated_at' => null,
        ];
    }
}
