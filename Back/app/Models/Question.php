<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Question extends Model
{
    use HasFactory;
    protected $fillable = ['answer', 'question', 'A', 'B', 'C', 'D', 'quiz_id'];

    public function quiz(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }

    public function instructor()
    {
        return $this->quiz->section->course->instructor;
    }
    public function course()
    {
        return $this->quiz->section->course;
    }
}
