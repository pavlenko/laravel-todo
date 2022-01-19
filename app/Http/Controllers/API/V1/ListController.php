<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ListRequest;
use App\Http\Resources\ListResource;
use App\ListModel;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ListController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'desk_id' => 'required|integer|exists:desks,id'
        ]);
throw new \Exception();
        return ListResource::collection(
            ListModel::orderBy('created_at', 'desc')->where('desk_id', $request->desk_id)->get()
        );
    }

    public function store(ListRequest $request)
    {
        $request->validate([
            'desk_id' => 'required|integer|exists:desks,id'
        ]);

        return new ListResource(ListModel::create($request->input()));
    }

    public function show(ListModel $list)
    {
        return new ListResource($list);
    }

    public function update(ListRequest $request, ListModel $list)
    {
        $list->update($request->validated());
        return new ListResource($list);
    }

    public function destroy(ListModel $list)
    {
        $list->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
