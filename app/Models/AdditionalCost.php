<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AdditionalCost extends Model
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
}
