<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListModel extends Model
{
    public function getTable(): string
    {
        return 'lists';
    }
}
