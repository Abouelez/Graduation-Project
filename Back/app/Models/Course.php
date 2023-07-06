<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'thumbnail', 'price', 'category_id', 'sub_category_id', 'user_id'];



    public function sections(): HasMany
    {
        return $this->hasMany(Section::class);
    }

    public function coupons(): BelongsToMany
    {
        return $this->belongsToMany(Coupon::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function subCategory(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'sub_category_id');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)
            ->withPivot('paid_price', 'purchase_date')
            ->withTimestamps();
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function instructor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    //return only accepted courses
    public function scopeAccepted(Builder $query): void
    {
        $query->where('AC', 1);
    }

    public function isPublished(): bool
    {
        return $this->AC == true;
    }

    public function scopeFilterByPrice(Builder $query, $minPrice, $maxPrice, $order): void
    {
        $query->whereBetween('price', [$minPrice, $maxPrice])->orderBy('price', $order);
    }
}
