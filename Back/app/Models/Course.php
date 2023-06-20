<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'thumbnail', 'price', 'category_id', 'user_id'];



    public function sections(): HasMany
    {
        return $this->hasMany(Section::class);
    }

    public function coupons(): BelongsToMany
    {
        return $this->belongsToMany(Coupon::class);
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)->withPivot('paid_price');
    }

    public function rates(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'reviews')->withPivot('rate', 'comment');
    }

    public function comments(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'comments')->withPivot('comment_text', 'parent_id');
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
}
