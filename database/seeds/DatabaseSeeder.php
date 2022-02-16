<?php

use App\Models\CardModel;
use App\Models\DeskModel;
use App\Models\ListModel;
use App\Models\TaskModel;
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
        factory(DeskModel::class, 1)->create()->each(function(DeskModel $desk) {
            $lists = factory(ListModel::class, 5)->create(['desk_id' => $desk->id]);
            $lists->each(function(ListModel $list, $key) use ($lists) {
                $list->prev = ($lists[$key - 1] ?? null)->id ?? 0;
                $list->next = ($lists[$key + 1] ?? null)->id ?? 0;
                $list->save();

                $cards = factory(CardModel::class, 5)->create(['list_id' => $list->id]);
                $cards->each(function(CardModel $card, $key) use ($cards) {
                    $card->prev = ($cards[$key - 1] ?? null)->id ?? 0;
                    $card->next = ($cards[$key + 1] ?? null)->id ?? 0;
                    $card->save();

                    $tasks = factory(TaskModel::class, 5)->create(['card_id' => $card->id]);
                    $tasks->each(function(TaskModel $task, $key) use ($tasks) {
                        $task->prev = ($tasks[$key - 1] ?? null)->id ?? 0;
                        $task->next = ($tasks[$key + 1] ?? null)->id ?? 0;
                        $task->save();
                    });
                });
            });
        });

        // $this->call(UsersTableSeeder::class);
    }
}
