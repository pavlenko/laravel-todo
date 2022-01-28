<?php

namespace App\Http\Controllers\API\V1;

use App\Models\DeskModel;
use App\Http\Controllers\Controller;
use App\Http\Requests\DeskRequest;
use App\Http\Resources\DeskResource;
use App\Services\Desks;
use Illuminate\Http\Response;
use function response;

class DeskController extends Controller
{
    public function index()
    {
        $desks = (new Desks())->fetchAll();
        return DeskResource::collection($desks);
    }

    public function store(DeskRequest $request)
    {
        return new DeskResource(DeskModel::create($request->validated()));
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
