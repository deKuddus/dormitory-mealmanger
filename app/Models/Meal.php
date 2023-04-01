<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Meal extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'dormitory_id',
        'break_fast',
        'lunch',
        'dinner',
        'status',
    ];

    public function dormitory()
    {
        return $this->belongsTo(Dormitory::class,'dormitory_id','id');
    }

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->format('Y-m-d'),
        );
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
