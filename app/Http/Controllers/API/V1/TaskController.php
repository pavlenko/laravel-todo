<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskResource;
use App\TaskModel;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'card_id' => 'required|integer|exists:cards,id'
        ]);

        return TaskResource::collection(
            TaskModel::orderBy('created_at', 'desc')->where('card_id', $request->card_id)->get()
        );
    }
}
