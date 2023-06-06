<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterTokenDeleteRequest;
use App\Models\RegisterToken;
use App\Services\RegisterTokenService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class RegisterTokenController extends Controller
{
    public function index(RegisterToken $registerToken): Response|RedirectResponse
    {
        $this->authorize('showToken', RegisterToken::class);

        try {
            return inertia('RegisterToken', [
                'tokens' => $registerToken->list()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create(RegisterTokenService $registerTokenService)
    {
        $this->authorize('createToken', RegisterToken::class);

        try {
            $registerTokenService->generateNewToken();
            return back()->with('success', 'New Token Created');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function destroy(RegisterTokenDeleteRequest $request, RegisterTokenService $registerTokenService)
    {
        $this->authorize('deleteToken', RegisterToken::class);

        try {
            $registerTokenService->delete($request);
            return back()->with('success', 'Token Delete');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }
}
