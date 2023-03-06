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
        'mess_id',
        'break_fast',
        'lunch',
        'dinner',
        'menu_date'
    ];

    public function mess()
    {
        return $this->belongsTo(Mess::class);
    }
}
