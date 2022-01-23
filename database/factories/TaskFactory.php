<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\TaskModel;
use Faker\Generator as Faker;

$factory->define(TaskModel::class, function (Faker $faker) {
    return [
        'name' => $faker->text(30)
    ];
});
