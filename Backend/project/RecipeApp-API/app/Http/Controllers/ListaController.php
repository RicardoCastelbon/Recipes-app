<?php

namespace App\Http\Controllers;

use App\Models\Lista;
use Illuminate\Http\Request;

class ListaController extends Controller
{
    //CRUD
    // Read all 
    public function getLists($userId)
    {
         /*NEED A IF CONDITION TO DON'T BE ABLE TO GET THE LISTS 
    OF ANOTHER USER
        if($userId != userId autenticated){
            return ERROR
        }
    */
        $lists = Lista::all()->where('user_id', $userId);
        //$lists = Lista::get()->toJson(JSON_PRETTY_PRINT);
        if ($lists->isEmpty()) {
            return response($lists, 204);
        }
        return response($lists, 200);
    }
    //GET ONE LIST BY LIST ID
    public function getList($listId)
    {
        if (Lista::where('id', $listId)->exists()) {
            $list = Lista::where('id', $listId)->get()->toJson(JSON_PRETTY_PRINT);
            return response($list, 200);
        } else {
            return response()->json([
                "message" => "List not found"
            ], 404);
        }
    }
    //create one 
    public function createList(Request $request, $userId)
    {
        
    /*NEED A IF CONDITION TO DON'T BE ABLE TO CREATE A LIST 
    WITH OTHER USER ID
        if($userId != userId autenticated){
            return ERROR
        }
    */
        $list = Lista::create([
            'title' => $request['title'],
            'user_id' => $userId
        ]);
 
        return response()->json([
            "message" => "List created"
        ], 201);
    }
    //Edit one
    /*  public function updateList(Request $request, $id)
    {
        if (Lista::where('id', $id)->exists()) {
            $list = Lista::find($id);
            $list->title = is_null($request->title) ? $list->title : $request->title;
            $list->save();

            return response()->json([
                "message" => "List Updated"
            ], 200);
        } else {
            return response()->json([
                "message" => "List not found"
            ], 404);
        }
    } */

    //Delete one
    public function deleteList($listId)
    {
        if (Lista::where('id', $listId)->exists()) {
            $list = Lista::find($listId);
            $list->delete();

            return response()->json([
                "message" => "List Deleted"
            ], 200);
        } else {
            return response()->json([
                "message" => "List not found"
            ], 404);
        }
    }

    //Search one
    /* public function search($title)
    {
        return Lista::where('title', 'like', '%' . $title . '%')->get();
    } */
}
