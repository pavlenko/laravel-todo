<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $desk_id
 * @property $name
 * @property $created_at
 * @property $updated_at
 */
class ListModel extends Model
{
    protected $fillable = ['name'];

    public function getTable(): string
    {
        return 'lists';
    }
}
