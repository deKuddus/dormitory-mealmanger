<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'break_fast_close',
        'lunch_close',
        'dinner_close',
        'app_name',
        'mess_id'
    ];

    public function mess()
    {
        return $this->belongsTo(Mess::class);
    }

}
