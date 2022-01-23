<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\DeskModel;
use Faker\Generator as Faker;

$factory->define(DeskModel::class, function (Faker $faker) {
    return [
        'name' => $faker->text(30)
    ];
});
