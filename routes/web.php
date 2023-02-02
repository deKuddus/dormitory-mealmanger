<?php

use App\Http\Controllers\Auth\LoginController;
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

Route::get('login', [LoginController::class, 'showLoginForm'])->name('login')->middleware('guest');
Route::post('login', [LoginController::class, 'login'])->name('login.attempt')->middleware('guest');
Route::post('logout', [LoginController::class, 'logout'])->name('logout');
// Images
Route::get('/img/{path}', [ImagesController::class, 'show'])->where('path', '.*');

// 500 error
Route::group(['middleware' => ['auth', 'remember']], function () {
    Route::get('/', DashboardController::class)->name('dashboard');
    Route::get('/home', DashboardController::class)->name('dashboard');
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('/calender/{mess_id?}', [\App\Http\Controllers\CalendarController::class, 'showCalender'])->name('dashboard');

    Route::resource('notice', \App\Http\Controllers\NoticeController::class);
    Route::resource('user', \App\Http\Controllers\UsersController::class);
    Route::resource('mess', \App\Http\Controllers\MessController::class);
    Route::resource('rule', \App\Http\Controllers\RuleController::class);
    Route::resource('ruleItem', \App\Http\Controllers\RuleItemController::class);
    Route::resource('asset', \App\Http\Controllers\AssetController::class);
    Route::resource('room', \App\Http\Controllers\RoomController::class);
    Route::resource('seat', \App\Http\Controllers\SeatController::class);
    Route::resource('chef', \App\Http\Controllers\ChefController::class);
    Route::resource('deposit', \App\Http\Controllers\DepositController::class);
    Route::resource('additional', \App\Http\Controllers\AdditionalCostController::class);
    Route::resource('menu', \App\Http\Controllers\MenuController::class);
    Route::resource('bazar', \App\Http\Controllers\BazarController::class);
    Route::resource('bazar-schedule', \App\Http\Controllers\BazarScheduleController::class);
});
