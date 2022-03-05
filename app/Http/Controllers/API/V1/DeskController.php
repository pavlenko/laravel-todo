<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeskRequest;
use App\Services\DesksManager;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;
use function response;

final class DeskController extends Controller
{
    public function index()
    {
        $desks = (new DesksManager())->getAllDesk(true);
        return JsonResource::collection($desks);
    }

    public function store(DeskRequest $request)
    {
        $request->validate([]);

        $manager = new DesksManager();
        $dto   = $manager->createDeskFromArray($request->input());

        $manager->insertDesk($dto);
        return new JsonResource($dto);
    }

    public function show($id)
    {
        return new JsonResource((new DesksManager())->getOneDesk($id));
    }

    public function update(DeskRequest $request, $id)
    {
        $request->validate([]);

        $manager = new DesksManager();

        $dto = $manager->getOneDesk($id);
        $dto->setAttributes($request->input());

        $manager->updateDesk($dto);
        return new JsonResource($dto);
    }

    public function destroy($id)
    {
        $manager = new DesksManager();
        $dto     = $manager->getOneDesk($id);

        $manager->deleteDesk($dto);
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
