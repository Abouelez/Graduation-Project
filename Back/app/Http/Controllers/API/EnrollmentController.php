<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaymentRequest;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Exception\CardException;

class EnrollmentController extends Controller
{
    public function pay(PaymentRequest $request)
    {
        $payment_amount = $request->payment_amount;
        $payment_id = $request->payment_id;

        Stripe::setApiKey(config('services.stripe.secret'));

        try {
            $payment_intent = \Stripe\PaymentIntent::create([
                'amount' => $payment_amount * 100,
                'currency' => 'usd',
                'payment_method' => $payment_id,
                'confirm' => true
            ]);

            $this->enroll($request->course_ids);

            return response()->json(['message' => 'Enrollment successful'], 200);
        } catch (CardException $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function enroll($course_ids)
    {
        $user = auth()->user();
        foreach ($course_ids as $course_id) {
            $price = Course::findOrFail($course_id)->price;
            $user->courses()->attach(
                $course_id,
                [
                    'paid_price' => $price,
                    'purchase_date' => now()
                ]
            );
        }
    }
}
