<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * @property $id
 * @property $name
 * @property $created_at
 * @property $updated_at
 *
 * @property ListModel[] $lists
 */
final class DeskModel extends Model
{
    protected $fillable = ['name'];

    public function getTable(): string
    {
        return 'desks';
    }

    public function lists(): Relation
    {
        return $this->hasMany(ListModel::class);
    }
}
