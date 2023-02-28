<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenuRequest;
use App\Http\Resources\MenuCollection;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Menu/Index', [
            'filters' => $requestParam,
            'menus' => new MenuCollection(
                Menu::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        return to_route('menu.index');
//        return Inertia::render('Menu/Create');
    }

    public function store(MenuRequest $request)
    {
        Menu::create(
            $request->validated()
        );

        return to_route('menu.index');
    }

    public function show($id)
    {

    }


    public function edit(Menu $menu)
    {
        return Inertia::render('Menu/Edit',[
            'menu' => $menu
        ]);
    }

    public function update(MenuRequest $request, Menu $menu)
    {
        $menu->update(
            $request->validated()
        );

        return to_route('menu.index');
    }

    public function destroy(Menu $menu)
    {
        return to_route('menu.index');
//        $menu->delete();
//        return to_route('menu.index');
    }

    public function restore(Menu $menu)
    {
        $menu->restore();
        return redirect()->back();
    }
}
