<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Room extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'dormitory_id',
        'name',
        'location',
        'status',
    ];


    public function dormitory()
    {
        return $this->belongsTo(Dormitory::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
