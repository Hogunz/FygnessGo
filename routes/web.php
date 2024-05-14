<?php

use App\Http\Controllers\HomeController;
use Inertia\Inertia;
use App\Models\Listing;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestimonialController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'home']);

Route::get('/find-a-gym', [ListingController::class, 'findaGym']);



//listings
Route::resource('listings', ListingController::class)->except(['update']);
Route::post('listings/{listing}', [ListingController::class, 'update'])->name('listings.update');

//SoftDelete
Route::delete('listings/forceDelete/{listing}', [ListingController::class, 'forceDelete'])->name('listings.forceDelete');


//testimonials
Route::resource('testimonials', TestimonialController::class)->except(['update']);
Route::post('testimonials/{testimonial}', [TestimonialController::class, 'update'])->name('testimonials.update');

//SoftDelete
Route::delete('testimonials/forceDelete/{testimonial}', [TestimonialController::class, 'forceDelete'])->name('testimonials.forceDelete');

//locations
Route::resource('locations', LocationController::class)->except(['update']);
Route::post('locations/{location}', [LocationController::class, 'update'])->name('locations.update');

//SoftDelete
Route::delete('locations/forceDelete/{location}', [TestimonialController::class, 'forceDelete'])->name('locations.forceDelete');






Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
