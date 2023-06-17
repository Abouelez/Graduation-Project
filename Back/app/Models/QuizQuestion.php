<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class QuizQuestion extends Model
{
    use HasFactory;
    protected $fillable = ['answer', 'A', 'B', 'C', 'D', 'quiz_id'];

    public function quiz(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }
}
