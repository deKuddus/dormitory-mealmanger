<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
                'access::user-create',
                'access::user-edit',
                'access::user-show',
                'access::user-delete',
                'access::bazar-create',
                'access::bazar-edit',
                'access::bazar-show',
                'access::bazar-delete',
                'access::deposit-create',
                'access::deposit-edit',
                'access::deposit-show',
                'access::deposit-delete',
                'access::deposit-approve',
                'access::deposit-reject',
                'access::expense-show',
                'access::additional-create',
                'access::additional-edit',
                'access::additional-show',
                'access::additional-delete',
                'access::bazarschedule-create',
                'access::bazarschedule-edit',
                'access::bazarschedule-show',
                'access::bazarschedule-delete',
                'access::mess-create',
                'access::mess-edit',
                'access::mess-show',
                'access::mess-delete',
                'access::notice-create',
                'access::notice-edit',
                'access::notice-show',
                'access::notice-delete',
                'access::rule-create',
                'access::rule-edit',
                'access::rule-show',
                'access::rule-delete',
                'access::rule-item-create',
                'access::rule-item-edit',
                'access::rule-item-show',
                'access::rule-item-delete',
                'access::asset-create',
                'access::asset-edit',
                'access::asset-show',
                'access::asset-delete',
                'access::room-create',
                'access::room-edit',
                'access::room-show',
                'access::room-delete',
                'access::seat-create',
                'access::seat-edit',
                'access::seat-delete',
                'access::seat-show',
                'access::chef-create',
                'access::chef-edit',
                'access::chef-show',
                'access::chef-delete',
                'access::show-report',
                'access::show-token',
                'access::role-create',
                'access::role-edit',
                'access::role-show',
                'access::role-delete',
                'access::permission-show',
        ];

        foreach ($permissions as $permission){
            Permission::create(['name' => $permission]);
        }
    }
}
