<?php

namespace App\Policies;

use App\Models\Course;
use App\Models\Lecture;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class LecturePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Lecture $lecture)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user)
    {
        return $user->is_instructor;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Lecture $lecture)
    {
        return $lecture->instructor()->id == $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Lecture $lecture)
    {
        return $lecture->instructor()->id == $user->id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Lecture $lecture)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Lecture $lecture)
    {
        //
    }
}
