<?php

namespace App\Http\Controllers;

use App\Models\AskMeCategory;
use App\Models\AskMes;
use Illuminate\Http\Request;

class Askme extends Controller
{
    public function index(){
        $askmes = AskMes::all();
        // $askmes = AskMes::paginate(10);
        $categories= AskMeCategory::all();
        // print_r($categories);
        // exit;
        return view('askme', ['askmes' => $askmes,'categories' => $categories]);

    }
    public function reloadAskmeData(){
        $askmes = AskMes::all();
        return response()->json($askmes);
    }

    public function get_askme_cat(Request $request){
        $categoryId= $request->cat_id;
        $askmes = AskMes::where('category', $categoryId)->get();
    //     $askmeData = [];
    // foreach ($askmes as $askme) {
    //     $askmeData[] = [
    //         'ask_me_id' => $askme->id,
    //         'question' => $askme->question,
    //         'answer' => $askme->answer
    //     ];
    // }
    
    // Return JSON response
    return response()->json($askmes);

    }
    
}
