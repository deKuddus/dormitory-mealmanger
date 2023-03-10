<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Deposit extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'mess_id',
        'amount',
        'deposit_date',
        'status'
    ];

    protected function depositDate(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->format('Y-m-d'),
            set: fn ($value) => Carbon::parse($value)->format('Y-m-d'),
        );
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mess()
    {
        return $this->belongsTo(Mess::class);
    }


    public function scopeActive($query){
        $query->whereStatus(1);
    }
}
