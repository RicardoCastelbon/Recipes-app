<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeLista extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'recipe_id',
        'image',
        'lista_id'
    ]

    public function userListas()
    {
        return $this->belongsTo(Lista::class,'id');
    }
}
