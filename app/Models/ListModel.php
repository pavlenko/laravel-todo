<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $desk_id
 * @property $prev
 * @property $next
 * @property $name
 * @property $created_at
 * @property $updated_at
 */
final class ListModel extends Model
{
    protected $fillable = ['desk_id', 'prev', 'next', 'name'];

    public function getTable(): string
    {
        return 'lists';
    }
}
