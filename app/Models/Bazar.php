<?php

namespace App\Models;

use App\Enums\BazarStatus;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
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
        'dormitory_id',
        'status',
        'bazar_schedule_id',
        'created_at'
    ];

    public function dormitory()
    {
        return $this->belongsTo(Dormitory::class);
    }


    public function scopeActive($query)
    {
        return $query->whereStatus(BazarStatus::APPROVED);
    }

    public function bazarSchedule()
    {
        return $this->belongsTo(BazarSchedule::class, 'bazar_schedule_id', 'id');
    }
}
