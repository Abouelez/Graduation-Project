<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Quiz extends Model
{
    use HasFactory;
    protected $table = 'quizzes';
    protected $fillable = ['title', 'section_id'];

    public function section(): BelongsTo
    {
        return $this->belongsTo(Section::class);
    }

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class);
    }

    public function instructor()
    {
        return $this->section->course->instructor;
    }

    public function course()
    {
        return $this->section->course;
    }
}
