<?php

namespace App\Http\Controllers;


use App\Models\Surveys;
use App\Models\Questions;
use Illuminate\Http\Request;

class Survey extends Controller
{

    public function index(){
        $surveysquestions=Questions::all();
        return view('survey',['surveys'=>$surveysquestions]);
    }
    public function index2(){
        
        $surveys =Surveys::with('question', 'answer')->get();
        $surveyData = [];
        foreach ($surveys as $survey) {
        $surveyData[] = [
            'survey_id' => $survey->id,
            'question' => [
                'id' => $survey->question->id,
                'text' => $survey->question->question,
                'text_ar' => $survey->question->question_ar,
                'text_fr' => $survey->question->question_fr,
                'text_zh' => $survey->question->question_zh,
            ],
            'selected_option' => [
                'id' => $survey->answer->id,
                'option' => $survey->answer->option,
                'option_ar' => $survey->answer->option_ar,
                'option_fr' => $survey->answer->option_fr,
                'option_zh' => $survey->answer->option_zh,
            ],
            'date' => $survey->date,
            'time' => $survey->time,
        ];
    }
    return view('survey',['surveys'=>$surveyData]);
       }

       public function reloadSurveyData(){
        
        $surveysquestions=Questions::all();
        return response()->json($surveysquestions);
    }
    
}
