<?php

use App\Http\Controllers\ListaController;
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
    //HTTP POST /characters
    Route::post('lists/{id}', [ListaController::class, 'createList']);

    //HTTP PUT /characters/{id}
    Route::put('list/{id}', [ListaController::class, 'updateList']);

    //HTTP DELETE /characters/{id}
    Route::delete('list/{id}', [ListaController::class, 'deleteList']);

    //LOGOUT
    Route::post('logout', [UserController::class, 'logout']);

    //HTTP GET LISTS BY USER
    Route::get('lists/{id}', [ListaController::class, 'getLists']);

});

//--------------PUBLIC ROUTES---------------------
//REGISTER 
Route::post('register', [UserController::class, 'register']);

//REGISTER 
Route::post('login', [UserController::class, 'login']);

//HTTP GET /characters/{id}
Route::get('list/{id}', [ListaController::class, 'getList']);

//SEARCH
Route::get('lists/search/{id}', [ListaController::class], 'search');
