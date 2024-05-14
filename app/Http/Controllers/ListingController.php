<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Listing;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $listings = Listing::withTrashed()->get();
        return Inertia::render('listing/Index', [
            'listings' => $listings,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $locations = Location::all();
        return Inertia::render('listing/Create', [
            'locations' => $locations,
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required|string|max:255',
            'main_image' => 'required|image',
            'vertical_image' => 'required|image',
            'description' => 'required',
            'inclusions' => 'required',
            'location_id' => 'required',
            'price' => 'required|numeric|max:255',
        ]);

        $main_imagePath = $request->file('main_image')->store('public');
        $main_imageName = basename($main_imagePath);

        $vertical_imagePath = $request->file('vertical_image')->store('public');
        $vertical_imageName = basename($vertical_imagePath);


        $listing = new Listing;
        $listing->name = $request->input('name');
        $listing->main_image = $main_imageName;
        $listing->vertical_image = $vertical_imageName;
        $listing->description = $request->input('description');
        $listing->inclusions = $request->input('inclusions');
        $listing->location_id = $request->input('location_id');
        $listing->price = $request->input('price');
        $listing->user_id = Auth::id();
        $listing->save();

        return redirect()->route('listings.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */

    /**
     * Display the specified resource.
     */
    public function show(Listing $listing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Listing $listing)
    {
        return Inertia::render('listing/Edit', [
            'listing' => $listing,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Listing $listing)
    {
        //  dd($request->all());
        $request->validate([
            'name' => 'required|string|max:255',
            'main_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'vertical_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'location_id' => 'nullable',
            'description' => 'nullable',
            'inclusions' => 'nullable',
            'price' => 'nullable',
        ]);

        if ($request->hasFile('main_image')) {
            $main_imagePath = $request->file('main_image')->store('public');
            $listing->main_image = $main_imagePath;
        }
        if ($request->hasFile('vertical_image')) {
            $vertical_imagePath = $request->file('vertical_image')->store('public');
            $listing->vertical_image = $vertical_imagePath;
        }


        $listing->name = $request->name;
        $listing->description = $request->input('description');
        $listing->inclusions = $request->input('inclusions');
        $listing->location_id = $request->input('location_id');
        $listing->save();

        return redirect()->route('listings.index');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function restore($listing)
    {
        Listing::withTrashed()->find($listing)->restore();

        return redirect()->route('listings.index')->with('status', 'Testimonial Successfully restored');
    }
    public function destroy(Listing $listing)
    {
        $listing->delete();
        return redirect()->route('listings.index')->with('status', 'Testimonial Successfully deleted');
    }
    public function forceDelete(Listing $listing)
    {
        $listing->forceDelete();

        return redirect()->route('listings.index')->with('status', 'Successfully Deleted');
    }

    public function findaGym()

    {
        $listings = Listing::withTrashed()->get();
        return Inertia::render('FindAGym', [
            'listings' => $listings,
        ]);
    }
    public function featuredGym()
    {
        $listings = Listing::withTrashed()->get();
        return Inertia::render('Welcome', [
            'listings' => $listings,
        ]);
    }
}
