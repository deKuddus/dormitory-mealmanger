<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ChefPolicy
{
    use HandlesAuthorization;

    public function createChef(User $user){
        return $user->can('access::chef-create');
    }

    public function showChef(User $user){
        return $user->can('access::chef-show');
    }

    public function editChef(User $user){
        return $user->can('access::chef-edit');
    }

    public function deleteChef(User $user){
        return $user->can('access::chef-delete');
    }
}
