<?php

namespace App\Http\Controllers\API\V1;

use App\CardModel;
use App\Http\Controllers\Controller;
use App\Http\Requests\CardRequest;
use App\Http\Resources\CardResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CardController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'list_id' => 'required|integer|exists:lists,id'
        ]);

        return CardResource::collection(
            CardModel::orderBy('created_at', 'desc')->where('list_id', $request->list_id)->get()
        );
    }

    public function store(CardRequest $request)
    {
        $request->validate([
            'list_id' => 'required|integer|exists:lists,id'
        ]);

        return new CardResource(CardModel::create($request->input()));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function update(CardRequest $request, CardModel $card)
    {
        $card->update($request->validated());
        return new CardResource($card);
    }

    public function destroy(CardModel $card)
    {
        $card->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
