<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $locations = Location::withTrashed()->get();
        return Inertia::render('location/Index', [
            'locations' => $locations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('location/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'location' => 'required',
        ]);

        $location = new Location;
        $location->location = $request->input('location');
        $location->user_id = Auth::id();
        $location->save();

        return redirect()->route('locations.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Location $location)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Location $location)
    {
        return Inertia::render('location/Edit', [
            'location' => $location,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Location $location)
    {
        $request->validate([
            'location' => 'nullable',

        ]);
        $location->location = $request->input('location');
        $location->save();

        return redirect()->route('locations.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function restore($location)
    {
        Location::withTrashed()->find($location)->restore();

        return redirect()->route('locations.index')->with('status', 'Testimonial Successfully restored');
    }
    public function destroy(Location $location)
    {
        $location->delete();
        return redirect()->route('locations.index')->with('status', 'Testimonial Successfully deleted');
    }
    public function forceDelete(Location $location)
    {
        $location->forceDelete();

        return redirect()->route('locations.index')->with('status', 'Successfully Deleted');
    }

    public function findaGym()

    {
        $listings = Location::withTrashed()->get();
        return Inertia::render('FindAGym', [
            'listings' => $listings,
        ]);
    }
    public function featuredGym()
    {
        $listings = Location::withTrashed()->get();
        return Inertia::render('Welcome', [
            'listings' => $listings,
        ]);
    }
}
