<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bazar extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'description',
        'amount',
        'mess_id',
        'status',
        'bazar_schedule_id'
    ];

    public function mess()
    {
        return $this->belongsTo(Mess::class);
    }


    public function scopeActive($query){
        return $query->whereStatus(1);
    }

    protected function createdAt():Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->format('Y-m-d'),
        );
    }

    public function bazarSchedule(){
        return $this->belongsTo(BazarSchedule::class,'bazar_schedule_id','id');
    }

}
