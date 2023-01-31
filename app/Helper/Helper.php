<?php
namespace App\Helper;

use App\Models\Mess;
use App\Models\Rule;
use App\Models\User;

class Helper{
    public static function messArray(){
        return [
            'messes' => Mess::get(['id', 'name'])->toArray(),
        ];
    }

    public static function usersArray(){
        return [
            'users' => User::get(['id', 'first_name'])->toArray(),
        ];
    }

    public static function rulesArray(){
        return [
            'rules' => Rule::get(['id', 'title'])->toArray(),
        ];
    }
}
