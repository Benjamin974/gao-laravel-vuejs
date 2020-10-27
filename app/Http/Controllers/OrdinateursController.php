<?php

namespace App\Http\Controllers;

use App\Attribution;
use App\Client;
use App\Http\Resources\AttributionsResource;
use App\Http\Resources\ClientsResource;
use App\Http\Resources\OrdinateursResource;
use App\Ordinateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrdinateursController extends Controller
{
    public function getOrdinateurs(Request $request)
    {


        $validator = Validator::make(
            $request->all(),
            [
                'date' => 'required',
            ],
            [
                'required' => 'Le champs :attribute est requis', // :attribute renvoie le champs / l'id de l'element en erreure
            ]
        )->validate();

        $ordinateurs = Ordinateur::leftJoin('attributions', 'ordinateurs.id', '=', 'id_ordinateur')
        ->whereHas('clients', function ($query) use ($validator) {
            $query->where("attributions.date", $validator['date']);
        })->get();

        return OrdinateursResource::collection($ordinateurs);
    }

    public function addOrdinateur(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required',
            ],
            [
                'required' => 'Le champs :attribute est requis', // :attribute renvoie le champs / l'id de l'element en erreure
            ]
        )->validate();

        $ordinateur = new Ordinateur;
        $ordinateur->name = $validator['name'];
        $ordinateur->save();

        return new OrdinateursResource($ordinateur);
    }

    public function getAttributions($id)
    {
        $attributions = Attribution::where('id_ordinateur', '=', $id)->get();
        return AttributionsResource::collection($attributions);
    }
}
