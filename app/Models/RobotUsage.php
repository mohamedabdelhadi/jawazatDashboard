<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RobotUsage extends Model
{
    use HasFactory;
    protected $table = 'robot_usage';
    protected  $guarded=[];
    public $timestamps = false;
}
