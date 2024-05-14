<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Listing extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'user_id',
        'name',
        'main_image',
        'vertical_image',
        'description',
        'inclusions',
        'location_id',
        'price',
        'start_time',
        'end_time',
    ];

    protected $with = ['location', 'images'];

    public function images()
    {
        return $this->hasMany(Image::class);
    }
    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}
