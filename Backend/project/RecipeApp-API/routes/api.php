<?php

use App\Http\Controllers\ListaController;
use App\Http\Controllers\RecipeListaController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use PharIo\Manifest\AuthorCollection;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//--------------PROTECTED ROUTES------------------------------
Route::group(['middleware' => ['auth:sanctum']], function () {

  //HTTP GET LISTS BY USER
  Route::get('lists/{id}', [ListaController::class, 'getLists']);

  //HTTP GET ONE LIST BY USER
  Route::get('list/{id}', [ListaController::class, 'getList']);

  //HTTP CREATE LIST
  Route::post('list-create/{id}', [ListaController::class, 'createList']);

  //HTTP UPDATE LIST
  Route::put('list-update/{id}', [ListaController::class, 'updateList']);

  //HTTP DELETE LIST
  Route::delete('list-delete/{id}', [ListaController::class, 'deleteList']);


  //GET RECIPES IN A LIST
  Route::get('recipelist/{listId}', [RecipeListaController::class], 'getRecipes');

  //ADD A RECIPE TO A LIST
  Route::post('recipelist-add/{listId}', [RecipeListaController::class], 'addRecipe');

  //DELETE A RECIPE FROM A LIST
  Route::delete('recipelist-delete/{listId}', [RecipeListaController::class, 'deleteRecipe']);

  //LOGOUT
  Route::post('logout', [UserController::class, 'logout']);
});

//--------------PUBLIC ROUTES---------------------
//REGISTER 
Route::post('register', [UserController::class, 'register']);

//REGISTER 
Route::post('login', [UserController::class, 'login']);

/* //HTTP GET /characters/{id}
Route::get('list/{id}', [ListaController::class, 'getList']);

//SEARCH
Route::get('lists/search/{id}', [ListaController::class], 'search'); */
