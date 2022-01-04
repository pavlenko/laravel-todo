<?php

use App\CardModel;
use App\DeskModel;
use App\ListModel;
use App\TaskModel;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(DeskModel::class, 5)->create()->each(function(DeskModel $desk) {
            $lists = factory(ListModel::class, 5)->create(['desk_id' => $desk->id]);
            $lists->each(function(ListModel $list, $key) use ($lists) {
                $list->prev = ($lists[$key - 1] ?? null)->id ?? 0;
                $list->next = ($lists[$key + 1] ?? null)->id ?? 0;
                $list->save();

                factory(CardModel::class, 5)->create(['list_id' => $list->id])->each(function(CardModel $card) {
                    factory(TaskModel::class, 5)->create(['card_id' => $card->id]);
                });
            });
        });

        // $this->call(UsersTableSeeder::class);
    }
}
