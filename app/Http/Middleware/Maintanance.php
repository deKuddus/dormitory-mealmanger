<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Maintanance
{

    public function handle(Request $request, Closure $next)
    {
        return response()->json([
            'status' => 'maintenance mode on',
            'code' => '503'
        ]);
    }
}
