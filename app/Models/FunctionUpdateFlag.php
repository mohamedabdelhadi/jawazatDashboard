<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FunctionUpdateFlag extends Model
{
    use HasFactory;
    protected $table = 'functions_update_flag';
    protected  $guarded=[];
}
