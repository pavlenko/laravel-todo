<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\TaskModel;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'card_id' => 'required|integer|exists:cards,id'
        ]);

        return TaskResource::collection(
            TaskModel::orderBy('created_at', 'asc')->where('card_id', $request->card_id)->get()
        );
    }

    public function store(TaskRequest $request)
    {
        $request->validate([
            'card_id' => 'required|integer|exists:cards,id'
        ]);

        return new TaskResource(TaskModel::create($request->input()));
    }
}
