<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Testimonial extends Model
{

    protected $fillable = [
        'user_id',
        'image',
        'content',
        'start_time',
        'end_time',
    ];
    use HasFactory, SoftDeletes;
}
