<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * @property $id
 * @property $desk_id
 * @property $prev
 * @property $next
 * @property $name
 * @property $created_at
 * @property $updated_at
 *
 * @property DeskModel $desk
 * @property CardModel[] $cards
 */
final class ListModel extends Model
{
    protected $fillable = ['desk_id', 'prev', 'next', 'name'];

    public function getTable(): string
    {
        return 'lists';
    }

    public function desk(): Relation
    {
        return $this->belongsTo(DeskModel::class);
    }

    public function cards(): Relation
    {
        return $this->hasMany(CardModel::class);
    }
}
