<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RuleItemPolicy
{
    use HandlesAuthorization;

    public function showRuleItem(User $user){
        return $user->can('access::rule-item-show');
    }

    public function editRuleItem(User $user){
        return $user->can('access::rule-item-edit');
    }

    public function createRuleItem(User $user){
        return $user->can('access::rule-item-create');
    }

    public function deleteRuleItem(User $user){
        return $user->can('access::rule-item-delete');
    }
}
