<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeLista extends Model
{
    use HasFactory;

    protected $fillable = [
        'recipe',
        'recipe_id',
        'image',
        'list_id'
    ]

    public function userListas()
    {
        return $this->belongsTo(Lista::class,'id');
    }
}
