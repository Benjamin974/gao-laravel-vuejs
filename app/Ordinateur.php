<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ordinateur extends Model
{
    protected $table = 'ordinateurs';
    protected $fillable = ['name'];
    public $timestamps = false;

    public function clients()
    {
        return $this->belongsToMany(Client::class, 'attributions','id_ordinateur', 'id_client')->withPivot('horaire', 'date');
    }


}
