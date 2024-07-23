<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AskMes extends Model
{
    use HasFactory;
    protected $table = 'conversation';
    protected  $guarded=[];
}
