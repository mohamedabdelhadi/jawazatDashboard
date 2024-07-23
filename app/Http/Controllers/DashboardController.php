<?php

namespace App\Http\Controllers;
use App\Models\AskMes;
use App\Models\Surveys;
use App\Models\RobotUsage;
use Illuminate\Http\Request;
use App\Models\RobotFunction;

class DashboardController extends Controller
{
   public function index(){
    return view('dashboardnew');
   }
   

   public function get_robot_usage_data(Request $request) {
    
    if($request->s != "" && $request->e !=""){
        $sources = RobotUsage::all()->whereBetween('created_at', [$request->s, $request->e])->groupBy('name');

    }else{
        $sources = RobotUsage::all()->groupBy('name');
    }
   

    $output = [];
    foreach ($sources as $key => $source) {
        $output[$key] = $source->count();
    }

    
    return response()->json($output);

    
   }
   public function get_survey_data_overall(Request $request) {
    
    if($request->s != "" && $request->e !=""){
        $sources = Surveys::all()->whereBetween('date', [$request->s, $request->e])->groupBy('answer_id');

    }else{
        $sources = Surveys::all()->groupBy('answer_id');
    }
   

    $output = [];
    foreach ($sources as $key => $source) {
        $label = '';

        switch ($key) {
            case 1:
                $label = 'Satisfied';
                break;
            case 2:
                $label = 'Acceptable';
                break;
            case 3:
                $label = 'Not Satisfied';
                break;
            // Add more cases as needed for other answer_id values
    
            default:
                $label = 'unknown';
                break;
        }
    
        $output[$label] = $source->count();
    }

    
    return response()->json($output);

    
   }
   public function get_survey_data_joined(Request $request){
    $startDate = $request->input('start_date');
    $endDate = $request->input('end_date');
    if($startDate != ""  && $endDate != ""){
        $surveys =Surveys::with('question', 'answer')->whereBetween('date', [$startDate, $endDate])->get();
    }
    else{
        $surveys =Surveys::with('question', 'answer')->get();
    }
   
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
    
    // Return JSON response
    return response()->json($surveyData);
   }
   public function get_askme_data(Request $request){
    $startDate = $request->input('start_date');
    $endDate = $request->input('end_date');
    if($startDate != ""  && $endDate != ""){
        $askmes =AskMes::all()->whereBetween('date', [$startDate, $endDate]);
    }
    else{
        $askmes =AskMes::all();
    }
   
    $askmeData = [];
    foreach ($askmes as $askme) {
        $askmeData[] = [
            'ask_me_id' => $askme->id,
            'question' => $askme->question,
            'answer' => $askme->answer
        ];
    }
    
    // Return JSON response
    return response()->json($askmeData);
   }
   //Robot Functions
   public function get_robot_functions()
   {
    $robot_functions =RobotFunction::all();
    $robotFunctionData = [];
    foreach ($robot_functions as $robotfuncion) {
        $robotFunctionData[] = [
            'id' => $robotfuncion->id,
            'name' => $robotfuncion->name,
            'status' => $robotfuncion->status,    
        ];
    }
    // Return JSON response
    return response()->json($robotFunctionData);
   }
   public function get_question_stats(Request $request) {
    $questionId = $request->input('quest_id');

    $counts = Surveys::where('question_id', $questionId)->get()->groupBy('answer_id');
    $output = [];

    foreach ($counts as $key => $count) {
        $label = '';
        switch ($key) {
            case 1:
                $label = 'Satisfied';
                break;
            case 2:
                $label = 'Acceptable';
                break;
            case 3:
                $label = 'Not satisfied';
                break;
            // Add more cases if needed for other answer IDs
            default:
                $label = 'Unknown'; // Default label for unknown answer IDs
        }
        $output[] = [
            'label' => $label,
            'count' => $count->count()
        ];
    }

    // Return JSON response with the counts
    return response()->json($output);
}


}
