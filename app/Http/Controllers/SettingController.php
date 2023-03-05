<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        return Inertia::render('Setting/Index', [
            'settings' => Setting::query()->whereMessId(1)->first()
        ]);
    }

    public function update(Request $request)
    {
        $settings = Setting::findOrFail($request->id);
        $settings->app_name = $request->name;
        $settings->break_fast_close = $request->breakFastClose;
        $settings->lunch_close = $request->lunchClose;
        $settings->dinner_close = $request->dinnerClose;
        $settings->save();
        return to_route('settings.index');
    }
}
