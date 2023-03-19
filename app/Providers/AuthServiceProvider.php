<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\AdditionalCost;
use App\Models\Asset;
use App\Models\Chef;
use App\Models\Deposit;
use App\Models\Meal;
use App\Models\Notice;
use App\Models\RegisterToken;
use App\Models\Role;
use App\Models\Room;
use App\Models\Rule;
use App\Models\RuleItem;
use App\Models\Seat;
use App\Models\User;
use App\Policies\AdditionalCostPolicy;
use App\Policies\AssetPolicy;
use App\Policies\ChefPolicy;
use App\Policies\DepositPolicy;
use App\Policies\MealPolicy;
use App\Policies\NoticePolicy;
use App\Policies\RegisterTokenPolicy;
use App\Policies\RolePolicy;
use App\Policies\RoomPolicy;
use App\Policies\RuleItemPolicy;
use App\Policies\RulePolicy;
use App\Policies\SeatPolicy;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        User::class => UserPolicy::class,
        AdditionalCost::class => AdditionalCostPolicy::class,
        Asset::class => AssetPolicy::class,
        Chef::class => ChefPolicy::class,
        Deposit::class => DepositPolicy::class,
        Meal::class => MealPolicy::class,
        Rule::class => RulePolicy::class,
        RuleItem::class => RuleItemPolicy::class,
        Notice::class => NoticePolicy::class,
        RegisterToken::class => RegisterTokenPolicy::class,
        Role::class => RolePolicy::class,
        Room::class => RoomPolicy::class,
        Seat::class => SeatPolicy::class

    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
