<?php

namespace App\Console\Commands;

use App\Helper\Helper;
use Illuminate\Console\Command;

class MealCreateCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:meal';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will create new month meals';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Meal create task started');
        if (now()->format('Y-m-d') !== date('Y-m-01')) {
            Helper::createMeal();
            $this->info("Meal successfully created for the month of " . now()->format('Y-m-d'));
            return Command::SUCCESS;
        }
        $this->error('No auto meal generated');
        return Command::SUCCESS;
    }
}
