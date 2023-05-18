<?php

namespace App\Services;

use App\Models\Menu;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class MenuService
{

    public function lists(): Collection
    {
        try {
            return Menu::query()->get();
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function store(Request $request): Menu
    {
        try {

            $menu = Menu::create(
                $request->validated()
            );
            return $menu;
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function update(Menu $menu, Request $request): Menu
    {
        try {
            $menu->update(
                $request->validated()
            );
            return $menu;
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

}
