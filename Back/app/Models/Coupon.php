<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Coupon extends Model
{
    use HasFactory;
    protected $fillable = ['code', 'discount_percentage'];

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class)->withPivot('expiration_data');
    }
}
