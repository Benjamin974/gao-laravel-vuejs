<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attribution extends Model
{
    protected $table = 'attributions';
    protected $fillable = ['id', 'horaire', 'date', 'id_ordinateur', 'id_client'];
    public $timestamps = false;


}
