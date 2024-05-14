<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $testimonials = Testimonial::withTrashed()->get();
        return Inertia::render('testimonial/Index', [
            'testimonials' => $testimonials,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('testimonial/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([

            'image' => 'required|image',
            'content' => 'required',
        ]);

        $imagePath = $request->file('image')->store('public');
        $imageName = basename($imagePath);

        $testimonial = new Testimonial;
        $testimonial->image = $imageName;
        $testimonial->content = $request->input('content');

        $testimonial->user_id = Auth::id();
        $testimonial->save();

        return redirect()->route('testimonials.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Testimonial $testimonial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testimonial $testimonial)
    {
        return Inertia::render('testimonial/Edit', [
            'testimonial' => $testimonial,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Testimonial $testimonial)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'content' => 'nullable',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('testimonials', 'public');
            $testimonial->image = $imagePath;
        }

        $testimonial->content = $request->input('content');
        $testimonial->save();

        return redirect()->route('testimonials.index');
    }


    public function restore($testimonial)
    {
        Testimonial::withTrashed()->find($testimonial)->restore();

        return redirect()->route('testimonials.index')->with('status', 'Testimonial Successfully restored');
    }
    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();
        return redirect()->route('testimonials.index')->with('status', 'Testimonial Successfully deleted');
    }
    public function forceDelete(Testimonial $testimonial)
    {
        $testimonial->forceDelete();

        return redirect()->route('testimonials.index')->with('status', 'Successfully Deleted');
    }
}
