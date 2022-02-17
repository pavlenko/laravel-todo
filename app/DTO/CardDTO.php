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
final class CardDTO extends BaseDTO
{
    public function attributes(): array
    {
        return [
            'id',
            'list_id',
            'prev',
            'next',
            'name',
            'text',
            'created_at',
            'updated_at',
        ];
    }
}