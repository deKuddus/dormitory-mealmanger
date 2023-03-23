<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RegisterTokenPolicy
{
    use HandlesAuthorization;

    public function createToken(User $user)
    {
        return $user->can('access::create-token');
    }

    public function showToken(User $user)
    {
        return $user->can('access::show-token');
    }

    public function deleteToken(User $user)
    {
        return $user->can('access::delete-token');
    }
}
