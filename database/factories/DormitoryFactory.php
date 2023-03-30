<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dormitory>
 */
class DormitoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name,
            'deposit' => 0,
            'address' => fake()->address,
            'status' => 1,
            'is_fixed_meal_rate' => 1,
            'user_id' => 1,
            'is_automeal' => 1,
            'has_breakfast' => 0,
            'has_lunch' => 1,
            'has_dinner' => 1,
            'break_fast_close' => "2:30 AM",
            'lunch_close' => "2:30 AM",
            'dinner_close' => "2:30 AM",
        ];
    }
}
