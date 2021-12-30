<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeskModel extends Model
{
    protected $fillable = ['name'];

    public function getTable(): string
    {
        return 'desks';
    }
}
