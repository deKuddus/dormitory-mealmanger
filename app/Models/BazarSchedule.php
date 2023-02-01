<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BazarSchedule extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'mess_id',
        'bazar_date',
        'status'
    ];

    protected function bazarDate(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->format('Y-m-d'),
            set: fn ($value) => Carbon::parse($value)->format('Y-m-d'),
        );
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }

    public function mess(){
        return $this->belongsTo(Mess::class);
    }
}
