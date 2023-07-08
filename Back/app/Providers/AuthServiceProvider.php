<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Lecture;
use App\Models\Quiz;
use App\Models\QuizQuestion;
use App\Models\Section;
use App\Policies\CategoryPolicy;
use App\Policies\CommentPolicy;
use App\Policies\CoursePolicy;
use App\Policies\LecturePolicy;
use App\Policies\QuizPolicy;
use App\Policies\QuizQuestionPolicy;
use App\Policies\SectionPolicy;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Notifications\Messages\MailMessage;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        Course::class => CoursePolicy::class,
        Category::class => CategoryPolicy::class,
        Comment::class => CommentPolicy::class,
        Lecture::class => LecturePolicy::class,
        Quiz::class => QuizPolicy::class,
        QuizQuestion::class => QuizQuestionPolicy::class,
        Section::class => SectionPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        VerifyEmail::toMailUsing(function ($notifiable, $url) {
            $sent_url = "http://localhost:3000?email_verify_url=" . $url;

            return (new MailMessage)
                ->subject('Verify Email Address')
                ->line('Click the button below to verify your email address.')
                ->action('Verify Email Address', $sent_url);
        });
    }
}
