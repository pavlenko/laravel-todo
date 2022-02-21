<?php

namespace App\DTO;

/**
 * Sortable DTO type with only defined attributes
 *
 * @property $id
 * @property $prev
 * @property $next
 */
abstract class BaseSortableDTO extends BaseDTO
{
    public function attributes(): array
    {
        return [
            'id',
            'prev',
            'next',
        ];
    }
}
