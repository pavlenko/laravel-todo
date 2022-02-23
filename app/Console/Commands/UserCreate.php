<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class UserCreate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create {email} {password} {name?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create user';

    public function handle()
    {
        $user = new \App\User();
        $user->name     = $this->argument('name') ?: $this->argument('email');
        $user->email    = $this->argument('email');
        $user->password = Hash::make($this->argument('password'));
        $user->save();
    }
}
