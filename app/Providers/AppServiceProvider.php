<?php

namespace App\Providers;

use League\Glide\Server;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;

use Illuminate\Http\Resources\Json\JsonResource;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // $this->registerGlide();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        JsonResource::withoutWrapping();
    }

     protected function registerGlide()
     {
         $this->app->bind(Server::class, function ($app) {
             return Server::create([
                 'source' => Storage::getDriver(),
                 'cache' => Storage::getDriver(),
                 'cache_folder' => '.glide-cache',
                 'base_url' => 'img',
             ]);
         });
     }
}
