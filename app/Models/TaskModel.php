<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * @property $id
 * @property $card_id
 * @property $prev
 * @property $next
 * @property $name
 * @property $status
 * @property $created_at
 * @property $updated_at
 *
 * @property CardModel $card
 */
final class TaskModel extends Model
{
    protected $fillable = ['card_id', 'name', 'status'];

    public function getTable(): string
    {
        return 'tasks';
    }

    public function card(): Relation
    {
        return $this->belongsTo(CardModel::class);
    }
}
