<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionCreateCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:permission';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create new Permission';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            $name = $this->ask('Permission name?');
            if($name) {
                $permissions = Permission::query()->create(['name' => $name]);
                $role = Role::find(1);
                $role->syncPermissions([...Permission::query()->pluck('id')->toArray(), $permissions->id]);
                $this->info('Permission added');
            }else{
                $this->info('Nothing to add');
            }
            return Command::SUCCESS;
        }catch (\Exception $exception){
            $this->error($exception);
            return Command::FAILURE;
        }
    }
}
