<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MealPolicy
{
    use HandlesAuthorization;

    public function showMeal(User $user)
    {
        return $user->can('access::meal-show');
    }

    public function editMeal(User $user)
    {
        return $user->can('access::meal-edit');
    }

    public function detailsMeal(User $user)
    {
        return $user->can('access::meal-edit');
    }
}
