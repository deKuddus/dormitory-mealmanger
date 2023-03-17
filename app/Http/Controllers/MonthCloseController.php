<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MonthCloseController extends Controller
{
    public function __invoke(){
        $month  = now();
        return $month;
    }
}
