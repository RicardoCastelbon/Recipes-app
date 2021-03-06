<?php

namespace App\Http\Controllers;

use App\Models\RecipeLista;
use Illuminate\Http\Request;

class RecipeListaController extends Controller
{
    //CRUD
    // Read all 
    public function getRecipes($listId)
    {
        $recipes = RecipeLista::all()->where('lista_id', $listId);
        //$lists = Lista::get()->toJson(JSON_PRETTY_PRINT);
          if ($recipes->isEmpty()) {
            return response($recipes, 204);
        }
        return response($recipes, 200); 
    }

    //Add
    public function addRecipe(Request $request, $listId)
    {
        $exist = RecipeLista::where('name', $request['recipeName'])->where('lista_id', $listId);

        if (!$exist->count()) {
            $recipe = RecipeLista::create([
                'name' => $request['recipeName'],
                'recipe_id' => $request['recipeId'],
                'image' => $request['image'],
                'lista_id' => $listId,
            ]);
            return  response($recipe, 200);
        } else {
            return response("The recipe exists in the list", 400);
        }
    }

    //Delete recipe
    public function deleteRecipe($recipeId)
    {
        if (RecipeLista::where('id', $recipeId)->exists()) {
            $recipe = RecipeLista::find($recipeId);
            $recipe->delete();

            return response()->json([
                "message" => "Recipe Deleted"
            ], 200);
        } else {
            return response()->json([
                "message" => "Recipe not found"
            ], 404);
        }
    }
}
