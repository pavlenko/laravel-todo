<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CardRequest;
use App\Services\Desks;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;

final class CardController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'list_id' => 'required|integer|exists:lists,id'
        ]);

        $desks = new Desks();
        $cards = $desks->getAllCard($request->list_id);

        return JsonResource::collection($cards);
    }

    public function store(CardRequest $request)
    {
        $request->validate([
            'list_id' => 'required|integer|exists:lists,id'
        ]);

        $desks = new Desks();
        $dto   = $desks->createCard($request->input());

        $desks->insertCard($dto);
        return new JsonResource($dto);
    }

    public function show($id)
    {
        $desks = new Desks();
        $dto   = $desks->getOneCard($id);
        return new JsonResource($dto);
    }

    public function update(CardRequest $request, $id)
    {
        $desks = new Desks();

        $dto = $desks->getOneCard($id);
        $dto->setAttributes($request->input());

        $desks->updateCard($dto);

        return new JsonResource($dto);
    }

    public function destroy($id)
    {
        $desks = new Desks();
        $dto   = $desks->getOneCard($id);

        $desks->deleteCard($dto);
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
