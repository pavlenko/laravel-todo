<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $list_id
 * @property $prev
 * @property $next
 * @property $name
 * @property $created_at
 * @property $updated_at
 */
class CardModel extends Model
{
    protected $fillable = ['list_id', 'name'];

    public function getTable(): string
    {
        return 'cards';
    }
}
