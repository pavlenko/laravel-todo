<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Services\TasksManager;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;

final class TaskController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'card_id' => 'required|integer|exists:cards,id'
        ]);

        $tasks = (new TasksManager())->getAllTask($request->card_id);
        return JsonResource::collection($tasks);
    }

    public function store(TaskRequest $request)
    {
        $request->validate([
            'card_id' => 'required|integer|exists:cards,id'
        ]);

        $manager = new TasksManager();
        $dto     = $manager->createTask($request->input());

        $manager->insertTask($dto);
        return new JsonResource($dto);
    }

    public function show($id)
    {
        return new JsonResource((new TasksManager())->getOneTask($id));
    }

    public function update(TaskRequest $request, $id)
    {
        $manager = new TasksManager();

        $dto = $manager->getOneTask($id);
        $dto->setAttributes($request->input());

        $manager->updateTask($dto);
        return new JsonResource($dto);
    }

    public function destroy($id)
    {
        $manager = new TasksManager();
        $dto     = $manager->getOneTask($id);

        $manager->deleteTask($dto);
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
