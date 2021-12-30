<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaskModel extends Model
{
    public function getTable(): string
    {
        return 'tasks';
    }
}
