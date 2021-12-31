<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ListModel;
use Faker\Generator as Faker;

$factory->define(ListModel::class, function (Faker $faker) {
    return [
        'name' => $faker->text(30)
    ];
});
