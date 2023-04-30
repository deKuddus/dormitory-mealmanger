<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'full_name' => fake()->firstName(),
            'display_name' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'password' => 123456789, // password
            'remember_token' => Str::random(10),
            'phone' => Str::random(10),
            'present_address' => fake()->address(),
            'permanent_address' => fake()->address(),
            'nid' => fake()->name(),
            'nid_type' => fake()->randomDigitNotNull(),
            'institution' => fake()->name(),
            'company' => fake()->name(),
            'status' => fake()->numberBetween(0, 1),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
