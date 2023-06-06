<?php

namespace App\Services;

use App\Http\Requests\RegisterTokenDeleteRequest;
use App\Http\Resources\RegisterTokenCollection;
use App\Models\RegisterToken;
use Exception;
use Illuminate\Support\Str;

class RegisterTokenService
{

    public function list(): RegisterTokenCollection
    {
        try {
            return new RegisterTokenCollection(
                RegisterToken::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function generateNewToken(): string
    {
        try {
            $uuid = Str::uuid();
            if (!RegisterToken::query()->where('uuid', $uuid)->exists()) {
                RegisterToken::query()->create([
                    'uuid' => $uuid,
                    'expire_at' => now()->addDay()
                ]);
            } else {
                $this->generateNewToken();
            }
            return $uuid;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function delete(RegisterTokenDeleteRequest $request)
    {
        try {
            return RegisterToken::query()->whereId($request->id)->delete();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }
}
