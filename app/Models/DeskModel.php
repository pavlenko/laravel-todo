<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $name
 * @property $created_at
 * @property $updated_at
 */
final class DeskModel extends Model
{
    protected $fillable = ['name'];

    public function getTable(): string
    {
        return 'desks';
    }
}
