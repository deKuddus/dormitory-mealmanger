<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Seat extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'room_id',
        'seat_no',
        'status'
    ];

    public function user(){
        $this->hasOne(User::class);
    }

    public function room(){
        $this->belongsTo(Room::class);
    }
}
