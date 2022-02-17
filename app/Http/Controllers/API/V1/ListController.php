<?php

namespace App\Http\Controllers\API\V1;

use App\DTO\ListDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\ListRequest;
use App\Services\Desks;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;

final class ListController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'desk_id' => 'required|integer|exists:desks,id'
        ]);

        $lists = (new Desks())->getLists($request->desk_id);
        return JsonResource::collection($lists);
    }

    public function store(ListRequest $request)
    {
        $request->validate([
            'desk_id' => 'required|integer|exists:desks,id'
        ]);

        $desks = new Desks();
        $dto   = new ListDTO($request->input());

        $desks->createList($dto);
        return new JsonResource($dto);
    }

    public function show($id)
    {
        return new JsonResource((new Desks())->getList($id));
    }

    public function update(ListRequest $request, $id)
    {
        $request->validate([]);

        $desks = new Desks();

        $dto = $desks->getList($id);
        $dto->setAttributes($request->input());

        $desks->updateList($dto);

        return new JsonResource($dto);
    }

    public function destroy($id)
    {
        $desks = new Desks();
        $dto   = $desks->getList($id);

        $desks->deleteList($dto);
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
