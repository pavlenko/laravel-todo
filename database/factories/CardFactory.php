<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CardModel;
use Faker\Generator as Faker;

$factory->define(CardModel::class, function (Faker $faker) {
    return [
        'name' => $faker->text(30)
    ];
});
