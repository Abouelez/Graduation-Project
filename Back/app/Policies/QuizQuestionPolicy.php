<?php

namespace App\Policies;

use App\Models\QuizQuestion;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class QuizQuestionPolicy
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
    public function view(User $user, QuizQuestion $quizQuestion)
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
    public function update(User $user, QuizQuestion $quizQuestion)
    {
        return $quizQuestion->instructor() == $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, QuizQuestion $quizQuestion)
    {
        return $quizQuestion->instructor() == $user->id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, QuizQuestion $quizQuestion)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, QuizQuestion $quizQuestion)
    {
        //
    }
}
