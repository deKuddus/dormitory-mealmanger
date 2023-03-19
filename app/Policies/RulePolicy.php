<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RulePolicy
{
    use HandlesAuthorization;

    public function showRule(User $user){
        return $user->can('access::rule-show');
    }

    public function editRule(User $user){
        return $user->can('access::rule-edit');
    }

    public function createRule(User $user){
        return $user->can('access::rule-create');
    }

    public function deleteRule(User $user){
        return $user->can('access::rule-delete');
    }
}
