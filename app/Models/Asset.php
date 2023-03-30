<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Asset extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'assets';

    protected $fillable = [
        'title',
        'description',
        'purchase_date',
        'status',
        'dormitory_id'
    ];

    protected function purchaseDate(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->format('Y-m-d'),
            set: fn ($value) => Carbon::parse($value)->format('Y-m-d'),
        );
    }
    public function dormitory()
    {
        return $this->belongsTo(Dormitory::class);
    }
}
