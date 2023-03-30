<?php

namespace App\Models;

use App\Enums\AdditionalCostType;
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
        'dormitory_id',
        'status'
    ];

    public function dormitory()
    {
        return $this->belongsTo(Dormitory::class);
    }

    public function scopeActive($query)
    {
        $query->whereStatus(AdditionalCostType::APPROVED);
    }
}
