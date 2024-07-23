<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questions extends Model
{
    use HasFactory;
    protected $table = 'questions';
    protected  $guarded=[];
    public function surveys()
    {
        return $this->hasMany(Surveys::class);
    }
}
