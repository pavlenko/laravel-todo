<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $card_id
 * @property $prev
 * @property $next
 * @property $name
 * @property $created_at
 * @property $updated_at
 */
class TaskModel extends Model
{
    protected $fillable = ['name'];

    public function getTable(): string
    {
        return 'tasks';
    }
}
