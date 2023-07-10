<?php

namespace App\Policies;

use App\Models\Question;
use App\Models\User;
use GuzzleHttp\Psr7\Query;
use Illuminate\Auth\Access\Response;

class QuestionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    // public function viewAny(User $user)
    // {
    //     return 1;
    // }

    /**
     * Determine whether the user can view the model.
     */
    // public function view(User $user, QuizQuestion $quizQuestion)
    // {
    //     return 1;
    // }

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
    public function update(User $user, Question $question)
    {
        return $question->instructor()->id == $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Question $question)
    {
        return $question->instructor()->id == $user->id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Query $question)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Question $question)
    {
        //
    }
}
