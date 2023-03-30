<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RegisterTokenPolicy
{
    use HandlesAuthorization;

    public function createToken(User $user)
    {
        return $user->can('access::token-create');
    }

    public function showToken(User $user)
    {
        return $user->can('access::token-show');
    }

    public function deleteToken(User $user)
    {
        return $user->can('access::token-delete');
    }
}
