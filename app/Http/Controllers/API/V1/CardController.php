<?php

namespace App\Http\Controllers\API\V1;

use App\CardModel;
use App\Http\Controllers\Controller;
use App\Http\Resources\CardResource;
use Illuminate\Http\Request;

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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
