<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CardModel extends Model
{
    public function getTable(): string
    {
        return 'cards';
    }
}
