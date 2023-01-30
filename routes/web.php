<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ImagesController;
use App\Http\Controllers\UsersController;
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

    Route::resource('notice', \App\Http\Controllers\NoticeController::class);
    Route::resource('users', \App\Http\Controllers\UsersController::class);
    Route::resource('mess', \App\Http\Controllers\MessController::class);
    Route::resource('rule', \App\Http\Controllers\RuleController::class);
    Route::resource('ruleItem', \App\Http\Controllers\RuleItemController::class);
    Route::resource('asset', \App\Http\Controllers\AssetController::class);
    Route::resource('room', \App\Http\Controllers\RoomController::class);
});
