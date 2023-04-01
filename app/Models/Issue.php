<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'status',
        'issued_by',
        'assigned_by',
        'resolved_by'
    ];

    public function issuer(){
        return $this->belongsTo(User::class,'issued_by','id');
    }

    public function assigner(){
        return $this->belongsTo(User::class,'assigned_by','id');
    }

    public function resolver(){
        return $this->belongsTo(User::class,'resolved_by','id');
    }
}
