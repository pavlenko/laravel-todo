<?php

namespace App\Http\Controllers\API\V1;

use App\DTO\DeskDTO;
use App\Models\DeskModel;
use App\Http\Controllers\Controller;
use App\Http\Requests\DeskRequest;
use App\Http\Resources\DeskResource;
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

    public function show(DeskModel $desk)
    {
        return new DeskResource($desk);
    }

    public function update(DeskRequest $request, DeskModel $desk)
    {
        $desk->update($request->validated());
        return new DeskResource($desk);
    }

    public function destroy(DeskModel $desk)
    {
        $desk->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
