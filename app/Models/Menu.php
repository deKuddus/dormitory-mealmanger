<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Menu extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'dormitory_id',
        'break_fast',
        'lunch',
        'dinner',
        'menu_date'
    ];

    public function dormitory()
    {
        return $this->belongsTo(Dormitory::class);
    }
}
