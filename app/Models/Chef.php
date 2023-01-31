<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chef extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'mess_id',
        'name',
        'phone',
        'address',
        'status'
    ];

    public function mess(){
        return $this->belongsTo(Mess::class);
    }
}
