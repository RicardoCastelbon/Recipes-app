<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lista extends Model
{
    use HasFactory;

    protected $fillable = [
            'title',
            'user_id'
        ];

    public function recipelista()
    {
        return $this->hasMany(RecipeLista::class, "list_id");
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
