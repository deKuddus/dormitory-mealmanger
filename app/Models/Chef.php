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
        'dormitory_id',
        'name',
        'phone',
        'address',
        'status'
    ];

    public function dormitory()
    {
        return $this->belongsTo(Dormitory::class);
    }
}
