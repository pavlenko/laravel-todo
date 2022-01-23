<?php

namespace App\Models;

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
    protected $fillable = ['card_id', 'name'];

    public function getTable(): string
    {
        return 'tasks';
    }
}
