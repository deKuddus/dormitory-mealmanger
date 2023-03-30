<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calculation extends Model
{
    use HasFactory;

    protected $fillable = [
        'dormitory_id',
        'user_id',
        'amount',
        'description',
        'total_meal',
        'calculate_date',
        'carry',
        'meal_rate',
        'deposit_time_of_calculation'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
