<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Surveys extends Model
{
    use HasFactory;
    protected $table = 'surveys';
    protected  $guarded=[];
    public function question()
    {
        return $this->belongsTo(Questions::class);
    }

    public function answer()
    {
        return $this->belongsTo(Answers::class);
    }
}
