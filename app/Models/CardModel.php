<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * @property $id
 * @property $list_id
 * @property $prev
 * @property $next
 * @property $name
 * @property $created_at
 * @property $updated_at
 *
 * @property ListModel $list
 * @property TaskModel[] $tasks
 */
final class CardModel extends Model
{
    protected $fillable = ['list_id', 'name', 'text', 'prev', 'next'];

    public function getTable(): string
    {
        return 'cards';
    }

    public function list(): Relation
    {
        return $this->belongsTo(ListModel::class);
    }

    public function tasks(): Relation
    {
        return $this->hasMany(TaskModel::class);
    }
}
