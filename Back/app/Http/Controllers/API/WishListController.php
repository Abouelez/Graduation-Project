<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * @group wishlist
 * 
 * Wishlist endPoints
 * @authenticated
 */
class WishListController extends Controller
{
    /**
     * Display Wislist
     * 
     * Return all courses in wishlist.
     * @response status=200 {"data":[{"id":5,"title":"Officiis ut suscipit quasi sit recusandae itaque.","description":"Iure eum commodi illo voluptatem vel consequuntur ea. Ea sint optio reiciendis blanditiis omnis. Accusamus magnam quaerat culpa aperiam. Aperiam sint error vero.","thumbnail":"https://via.placeholder.com/640x480.png/0055bb?text=suscipit","price":"974.69","published":1,"instructor":{"id":8,"name":"Jeramy Will","email":"smiller@sd.com","avatar":"https://via.placeholder.com/640x480.png/003300?text=dolorum","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":2,"title":"Rem nostrum dolores tempore est veniam occaecati.","description":"Et et praesentium enim nemo sunt placeat et. Tempora earum accusantium sint porro. Voluptas facilis natus et eum ut nemo quia. Numquam sint provident nemo sit natus voluptatem atque.","thumbnail":"https://via.placeholder.com/640x480.png/0099ee?text=ad","price":"938.70","published":1,"instructor":{"id":5,"name":"Wilford Skiles","email":"rafaela.wilderman@ds.org","avatar":"https://via.placeholder.com/640x480.png/004444?text=similique","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null}]}
     */
    public function wishlist()
    {
        /** @var User $user */
        $user = auth()->user();
        return CourseResource::collection($user->wishlist);
    }
    /**
     * Add To Wishlist
     * 
     * Add Course To Wishlist
     * @response status=200 {"message":"Course added to wishlist","course":{"id":2,"title":"Rem nostrum dolores tempore est veniam occaecati.","description":"Et et praesentium enim nemo sunt placeat et. Tempora earum accusantium sint porro. Voluptas facilis natus et eum ut nemo quia. Numquam sint provident nemo sit natus voluptatem atque.","thumbnail":"https://via.placeholder.com/640x480.png/0099ee?text=ad","price":"938.70","published":1,"instructor":{"id":5,"name":"Wilford Skiles","email":"rafaela.wilderman@sd.org","avatar":"https://via.placeholder.com/640x480.png/004444?text=similique","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null}}
     */
    public function addToWishlist(Course $course)
    {
        /** @var User $user */
        $user = auth()->user();
        $user->wishlist()->attach($course->id);
        return response()->json([
            "message" => "Course added to wishlist",
            'course' => new CourseResource($course)
        ]);
    }
    /**
     * Remove
     * 
     * Remove Course From Wishlist
     * @response status=204
     */
    public function remove(Course $course)
    {
        /** @var User $user */
        $user = auth()->user();
        $user->wishlist()->detach($course->id);
        return response()->json([
            "message" => "Course removed from wishlist",
        ], Response::HTTP_NO_CONTENT);
    }
}
