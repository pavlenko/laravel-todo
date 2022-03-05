<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ListRequest;
use App\Services\ListsManager;
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

        $lists = (new ListsManager())->getListsBy(['desk_id' => $request->desk_id]);
        return JsonResource::collection($lists);
    }

    public function store(ListRequest $request)
    {
        $request->validate([
            'desk_id' => 'required|integer|exists:desks,id'
        ]);

        $manager = new ListsManager();
        $dto     = $manager->createList($request->input());

        $manager->insertList($dto);
        return new JsonResource($dto);
    }

    public function show($id)
    {
        return new JsonResource((new ListsManager())->getOneList($id));
    }

    public function update(ListRequest $request, $id)
    {
        $request->validate([]);

        $manager = new ListsManager();

        $dto = $manager->getOneList($id);
        $dto->setAttributes($request->input());

        $manager->updateList($dto);
        return new JsonResource($dto);
    }

    public function destroy($id)
    {
        $manager = new ListsManager();
        $dto     = $manager->getOneList($id);

        $manager->deleteList($dto);
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
