<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RuleItem extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'rule_id',
        'description',
        'status',
    ];

    public function rule()
    {
        return $this->belongsTo(Rule::class);
    }



}
