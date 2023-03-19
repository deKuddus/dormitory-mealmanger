<?php

namespace App\Http\Controllers;

use App\Http\Resources\RegisterTokenCollection;
use App\Models\RegisterToken;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class RegisterTokenController extends Controller
{
    public function index()
    {
        $this->authorize('showToken', User::class);

        return inertia('RegisterToken', [
            'tokens' => new RegisterTokenCollection(
                RegisterToken::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
            )
        ]);
    }

    public function create()
    {
        $this->authorize('createNotice', User::class);

        $uuid = Str::uuid();
        if (!RegisterToken::query()->where('uuid', $uuid)->exists()) {
            RegisterToken::query()->create([
                'uuid' => $uuid,
                'expire_at' => now()->addDay()
            ]);
        } else {
            self::create();
        }
        return back()->with('success', 'New Token Created');
    }

    public function destroy(Request $request)
    {
        $this->authorize('deleteNotice', User::class);

        $request->validate(['id' => 'required']);
        RegisterToken::query()->whereId($request->id)->delete();
        return back()->with('success', 'Token Delete');
    }
}
