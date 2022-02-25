<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CardRequest;
use App\Services\CardsManager;
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

        $cards = (new CardsManager())->getAllCard($request->list_id);
        return JsonResource::collection($cards);
    }

    public function store(CardRequest $request)
    {
        $request->validate([
            'list_id' => 'required|integer|exists:lists,id'
        ]);

        $manager = new CardsManager();
        $dto     = $manager->createCard($request->input());

        $manager->insertCard($dto);
        return new JsonResource($dto);
    }

    public function show($id)
    {
        return new JsonResource((new CardsManager())->getOneCard($id));
    }

    public function update(CardRequest $request, $id)
    {
        $manager = new CardsManager();

        $dto = $manager->getOneCard($id);
        $dto->setAttributes($request->input());

        $manager->updateCard($dto);
        return new JsonResource($dto);
    }

    public function destroy($id)
    {
        $manager = new CardsManager();
        $dto     = $manager->getOneCard($id);

        $manager->deleteCard($dto);
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
