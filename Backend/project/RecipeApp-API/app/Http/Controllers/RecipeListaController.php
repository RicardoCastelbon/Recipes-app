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
       /*  if ($recipes->isEmpty()) {
            return response($recipes, 204);
        }
        return response($recipes, 200); */
    }

    //Add
    public function addRecipe($listId, Request $request)
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
            return $this->errorHandler($exist, 'Recipe exist in the list');
        }
    }

    //Delete recipe
    public function deleteRecipe($id)
    {
        if (RecipeLista::where('id', $id)->exists()) {
            $recipe = RecipeLista::find($id);
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
