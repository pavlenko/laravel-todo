<?php

namespace App\Http\Controllers\API\V1;

use App\DTO\DeskDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\DeskRequest;
use App\Services\Desks;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;
use function response;

class DeskController extends Controller
{
    public function index()
    {
        $desks = (new Desks())->fetchAll();
        return JsonResource::collection($desks);
    }

    public function store(DeskRequest $request)
    {
        $request->validate([]);

        $desks = new Desks();
        $dto   = new DeskDTO($request->input());

        $desks->createDesk($dto);

        return new JsonResource($dto);
    }

    public function show($id)
    {
        $dto = (new Desks())->fetchRow($id);
        return new JsonResource($dto);
    }

    public function update(DeskRequest $request, $id)
    {
        $request->validate([]);

        $desks = new Desks();

        $dto = $desks->fetchRow($id);
        $dto->setAttributes($request->input());

        $desks->updateDesk($dto);

        return new JsonResource($dto);
    }

    public function destroy($id)
    {
        $desks = new Desks();
        $dto   = $desks->fetchRow($id);

        $desks->deleteDesk($dto);

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
