<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use App\Models\Testimonial;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class HomeController extends Controller
{
    public function home()
    {
        $testimonials = Testimonial::all();
        $listings = Listing::inRandomOrder()->get()->take(4);
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'listings' => $listings,
            'testimonials' => $testimonials,
        ]);
    }
}
