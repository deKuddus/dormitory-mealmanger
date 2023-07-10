<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Maintanance
{

    public function handle(Request $request, Closure $next)
    {
        return $next($request);

        return response()->json([
            'message' => 'maintenance mode on',
            'status' => '503'
        ], 503);
    }
}
