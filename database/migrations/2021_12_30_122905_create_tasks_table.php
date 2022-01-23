<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->integerIncrements('id')->unsigned();
            $table->integer('card_id')->unsigned()->nullable(false);
            $table->integer('prev')->unsigned()->nullable(false)->default(0);
            $table->integer('next')->unsigned()->nullable(false)->default(0);
            $table->string('name')->nullable(false);
            $table->integer('status')->unsigned()->nullable(false)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
