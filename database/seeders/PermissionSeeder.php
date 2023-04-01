<?php

namespace Database\Seeders;


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
            'access::dashboard-show',
            'access::user-create',
            'access::user-edit',
            'access::user-show',
            'access::user-delete',
            'access::user-note-edit',
            'access::bazar-create',
            'access::bazar-edit',
            'access::bazar-show',
            'access::bazar-delete',
            'access::bazar-approve',
            'access::deposit-create',
            'access::deposit-edit',
            'access::deposit-show',
            'access::deposit-delete',
            'access::deposit-approve',
            'access::deposit-reject',
            'access::deposit-withdraw',
            'access::expense-show',
            'access::additional-create',
            'access::additional-edit',
            'access::additional-show',
            'access::additional-delete',
            'access::bazarschedule-create',
            'access::bazarschedule-edit',
            'access::bazarschedule-show',
            'access::bazarschedule-delete',
            'access::dormitory-create',
            'access::dormitory-edit',
            'access::dormitory-show',
            'access::dormitory-delete',
            'access::notice-create',
            'access::notice-edit',
            'access::notice-show',
            'access::notice-delete',
            'access::rule-create',
            'access::rule-edit',
            'access::rule-show',
            'access::rule-delete',
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
            'access::report-show',
            'access::token-show',
            'access::token-create',
            'access::token-delete',
            'access::role-create',
            'access::role-edit',
            'access::role-show',
            'access::role-delete',
            'access::permission-show',
            'access::meal-add',
            'access::meal-show',
            'access::meal-edit',
            'access::meal-details',
            'access::closing-show',
            'access::month-close',
            'access::month-start',
            'access::password-change',
            'access::calender-show',
            'access::issue-show',
            'access::issue-create',
            'access::issue-edit',
            'access::issue-delete',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission, 'guard_name' => 'web']);
        }
    }
}
