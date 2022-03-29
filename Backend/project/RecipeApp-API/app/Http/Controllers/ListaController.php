<?php

namespace App\Http\Controllers;

use App\Models\Lista;
use Illuminate\Http\Request;

class ListaController extends Controller
{
    //CRUD
    // Read all 
    public function getAllLists()
    {
        $lists = Lista::get()->toJson(JSON_PRETTY_PRINT);
        return response($lists, 200);
    }
    //Read one
    public function getList($id)
    {
        if (Lista::where('id', $id)->exists()) {
            $list = Lista::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($list, 200);
        } else {
            return response()->json([
                "message" => "List not found"
            ], 404);
        }
    }
    //create one 
    public function createList(Request $request)
    {
        $list = new Lista();
        $list->title = $request->title;
        $list->save();

        return response()->json([
            "message" => "List created"
        ], 201);
    }
    //Edit one
    public function updateList(Request $request, $id)
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
    }

    //Delete one
    public function deleteList($id)
    {
        if (Lista::where('id', $id)->exists()) {
            $list = Lista::find($id);
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
    public function search($title)
    {
        return Lista::where('title', 'like', '%' . $title . '%')->get();
    }
}
