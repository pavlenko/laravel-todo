<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeskRequest;
use App\Services\Desks;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;
use function response;

final class DeskController extends Controller
{
    public function index()
    {
        $desks = (new Desks())->getAllDesk();
        return JsonResource::collection($desks);
    }

    public function store(DeskRequest $request)
    {
        //throw new \Exception();
        $request->validate([]);

        $desks = new Desks();
        $dto   = $desks->createDesk($request->input());

        $desks->insertDesk($dto);

        return new JsonResource($dto);
    }

    public function show($id)
    {
        $dto = (new Desks())->getOneDesk($id);
        return new JsonResource($dto);
    }

    public function update(DeskRequest $request, $id)
    {
        $request->validate([]);

        $desks = new Desks();

        $dto = $desks->getOneDesk($id);
        $dto->setAttributes($request->input());

        $desks->updateDesk($dto);

        return new JsonResource($dto);
    }

    public function destroy($id)
    {
        $desks = new Desks();
        $dto   = $desks->getOneDesk($id);

        $desks->deleteDesk($dto);

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
