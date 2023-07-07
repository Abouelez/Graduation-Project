<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lecture extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'type', 'content_url', 'section_id'];

    public function section(): BelongsTo
    {
        return $this->belongsTo(Section::class);
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
