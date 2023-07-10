<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaymentRequest;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Exception\CardException;

/**
 * @group Enrollment And Payment
 * 
 * Mange Enrollment Process
 * @authenticated
 */
class EnrollmentController extends Controller
{
    /**
     * Payment
     * 
     * Payment Process
     * 
     * @bodyParam payment_amount number required Amount needed to pay. Example: 100
     * @bodyParam payment_id string required Payment method id that generated from stripe. Example = 
     * @bodyParam course_ids object required Array of courses ids. Example: [1, 10]
     * 
     * @response status=200 {"message":"Enrollment successful"}
     * @response status=500 {"message":"No such PaymentMethod: 'pm_1NS6eqGEPWFHPllANwhUzh'"}
     * 
     */
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
        /**@var User $user */
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
