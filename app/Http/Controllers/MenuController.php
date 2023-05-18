<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenuRequest;
use App\Models\Menu;
use App\Services\MenuService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class MenuController extends Controller
{
    public function index(MenuService $menuService): Response|RedirectResponse
    {
        try {
            return Inertia::render('Menu/Index', [
                'menus' => $menuService->lists(),
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create(): Response | RedirectResponse
    {
        try {
            return to_route('menu.index');
//            return Inertia::render('Menu/Create');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(MenuRequest $request, MenuService $menuService): RedirectResponse
    {
        try {
            $menuService->store($request);
            return to_route('menu.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show($id): Response|RedirectResponse
    {
        try {
            return to_route('menu.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }


    public function edit(Menu $menu): Response|RedirectResponse
    {
        try {
            return Inertia::render('Menu/Edit', [
                'menu' => $menu
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(MenuRequest $request, Menu $menu, MenuService $menuService): RedirectResponse
    {
        try {
            $menuService->update($menu, $request);
            return back()->with('success', 'Menu updated');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function destroy(Menu $menu): RedirectResponse
    {
        try {
            return to_route('menu.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

}
