<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answers extends Model
{
    use HasFactory;
    protected $table = 'answers';
    protected  $guarded=[];
    public function surveys()
    {
        return $this->hasMany(Surveys::class);
    }
}
