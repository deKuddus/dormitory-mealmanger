<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AdditionalCostPolicy
{
    use HandlesAuthorization;


    public function showAdditionalCost(User $user){
        return $user->can('access::additional-show');
    }


    public function editAdditionalCost(User $user){
        return $user->can('access::additional-edit');
    }


    public function createAdditionalCost(User $user){
        return $user->can('access::additional-create');
    }


    public function deleteAdditionalCost(User $user){
        return $user->can('access::additional-delete');
    }
}
