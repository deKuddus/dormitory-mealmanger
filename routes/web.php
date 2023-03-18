<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ImagesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test',function (){
  abort(404);
});



Route::get('/',[\App\Http\Controllers\HomeController::class,'index'])->name('home');


Route::get('login', [LoginController::class, 'showLoginForm'])->name('login')->middleware('guest');
Route::post('login', [LoginController::class, 'login'])->name('login.attempt')->middleware('guest');
Route::get('register/{uuid?}', [RegisterController::class, 'showRegistrationForm'])->name('register')->middleware('guest');
Route::post('register/store', [RegisterController::class, 'register'])->name('register.attempt')->middleware('guest');
Route::post('logout', [LoginController::class, 'logout'])->name('logout');
// Images
Route::get('/img/{path}', [ImagesController::class, 'show'])->where('path', '.*');



Route::group(['middleware' => 'auth'],function (){
    Route::get('dashboard',[\App\Http\Controllers\Member\HomeController::class,'index'])->name('user.dashboard');
    Route::get('meal/show',[\App\Http\Controllers\Member\HomeController::class,'mealDetails'])->name('user.meal.show');
    Route::post('meal-status/update',[\App\Http\Controllers\Member\HomeController::class,'updateMealStatus'])->name('user.meal.update');
    Route::post('meal/update',[\App\Http\Controllers\Member\HomeController::class,'mealUpdate'])->name('user.meal.update.each');
    Route::get('deposits',[\App\Http\Controllers\Member\HomeController::class,'deposits'])->name('user.deposits.index');
    Route::get('deposits/create',[\App\Http\Controllers\Member\HomeController::class,'createDeposit'])->name('user.deposits.create');
    Route::post('deposits/store',[\App\Http\Controllers\Member\HomeController::class,'storeDeposit'])->name('user.deposits.store');
    Route::get('profile/edit',[\App\Http\Controllers\Member\HomeController::class,'editProfile'])->name('user.profile.edit');
    Route::post('profile/update',[\App\Http\Controllers\Member\HomeController::class,'updateProfile'])->name('user.profile.update');
    Route::get('bazar', [\App\Http\Controllers\Member\BazarController::class,'index'])->name('user.bazar.index');
    Route::get('bazar/create', [\App\Http\Controllers\Member\BazarController::class,'create'])->name('user.bazar.create');
    Route::post('bazar/store', [\App\Http\Controllers\Member\BazarController::class,'store'])->name('user.bazar.store');
});

Route::group(['middleware' => ['auth', 'remember','hasAccessInDashboard'],'prefix' => 'master'], function () {
    Route::get('/', DashboardController::class)->name('dashboard');
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
//    Route::get('/calender/{mess_id?}', [\App\Http\Controllers\CalendarController::class, 'showCalender'])->name('dashboard');

    Route::get('tokens',[\App\Http\Controllers\RegisterTokenController::class,'index'])->name('tokens.index');
    Route::post('tokens/create',[\App\Http\Controllers\RegisterTokenController::class,'create'])->name('tokens.create');
    Route::post('tokens/destroy',[\App\Http\Controllers\RegisterTokenController::class,'destroy'])->name('tokens.destroy');

    Route::resource('notice', \App\Http\Controllers\NoticeController::class);
    Route::resource('user', \App\Http\Controllers\UsersController::class);
    Route::resource('mess', \App\Http\Controllers\MessController::class);
    Route::resource('rule', \App\Http\Controllers\RuleController::class);
    Route::resource('ruleItem', \App\Http\Controllers\RuleItemController::class);
    Route::resource('asset', \App\Http\Controllers\AssetController::class);
    Route::resource('room', \App\Http\Controllers\RoomController::class);
    Route::resource('seat', \App\Http\Controllers\SeatController::class);
    Route::resource('chef', \App\Http\Controllers\ChefController::class);

    Route::resource('additional', \App\Http\Controllers\AdditionalCostController::class);
    Route::resource('menu', \App\Http\Controllers\MenuController::class);
    Route::resource('bazar', \App\Http\Controllers\BazarController::class);
    Route::post('bazar/approve',[\App\Http\Controllers\BazarController::class,'approveBazar'])->name('bazar.approve');
    Route::resource('bazar-schedule', \App\Http\Controllers\BazarScheduleController::class);


    Route::resource('deposit', \App\Http\Controllers\DepositController::class)->except('show');
    Route::get('deposit/show/{user}',[\App\Http\Controllers\DepositController::class,'show'])->name('deposit.show');
    Route::post('deposit/accept/{deposit}',[\App\Http\Controllers\DepositController::class,'accept'])->name('deposit.accept');
    Route::post('deposit/reject/{deposit}',[\App\Http\Controllers\DepositController::class,'reject'])->name('deposit.reject');
    Route::post('deposit/withdraw',[\App\Http\Controllers\DepositController::class,'withdraw'])->name('deposit.withdraw');


    Route::get('meals',[\App\Http\Controllers\MealController::class,'index'])->name('meals.index');
    Route::get('meals/show/{user}',[\App\Http\Controllers\MealController::class,'show'])->name('meals.show');
    Route::post('meal/update',[\App\Http\Controllers\MealController::class,'update'])->name('meal.update');


    Route::get('expenses',[\App\Http\Controllers\ExpenseController::class,'index'])->name('expense.index');
    Route::get('settings',[\App\Http\Controllers\SettingController::class,'index'])->name('settings.index');
    Route::post('settings/update',[\App\Http\Controllers\SettingController::class,'update'])->name('settings.update');

    Route::get('month/close',\App\Http\Controllers\MonthCloseController::class)->name('month.close');
    Route::get('permissions',[\App\Http\Controllers\PermissionController::class,'index'])->name('permissions.index');
    Route::resource('role',\App\Http\Controllers\RoleController::class);
    Route::get('report',[\App\Http\Controllers\ReportController::class,'index'])->name('report.index');


});
