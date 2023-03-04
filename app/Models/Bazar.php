<?php

namespace App\Models;

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
        'status'
    ];

    public function mess()
    {
        return $this->belongsTo(Mess::class);
    }


    public function scopeActive($query){
        return $query->whereStatus(1);
    }

}
