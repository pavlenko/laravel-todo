<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $desk_id
 * @property $sort
 * @property $name
 * @property $created_at
 * @property $updated_at
 */
class ListModel extends Model
{
    protected $fillable = ['desk_id', 'sort', 'name'];

    public function getTable(): string
    {
        return 'lists';
    }
}
