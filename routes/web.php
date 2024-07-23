<?php

use App\Http\Controllers\Askme;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Survey;

// Route::get('/', function () {
//     return view('login-page');
// });
//Get Data Routes


Route::group(['middleware' => 'auth'],function(){
    
    Route::get('/logout',[LoginController::class,'logout'])->name('logout');
    Route::get('/jawazat',[DashboardController::class,'index']);
    Route::get('/get_askme_data',[DashboardController::class,'get_askme_data']);
    Route::get('/get_robot_functions',[DashboardController::class,'get_robot_functions']);
    Route::get('/get_answers_data',[DashboardController::class,'get_answers_data']);
    Route::get('/get_questions_data',[DashboardController::class,'get_questions_data']);
    Route::get('/get_robot_usage_data',[DashboardController::class,'get_robot_usage_data']);
    Route::get('/get_survey_data_overall',[DashboardController::class,'get_survey_data_overall']);
    Route::get('/get_takeme_map_data',[DashboardController::class,'get_takeme_map_data']);
    Route::get('/get_survey_data_joined',[DashboardController::class,'get_survey_data_joined']);
    Route::get('/get_question_stats',[DashboardController::class,'get_question_stats']); 
    Route::get('/survey',[Survey::class,'index']);
    Route::get('/askme',[Askme::class,'index']);

    Route::get('/get_askme_cat',[AskMe::class,'get_askme_cat']);
    Route::get('/askme_reload',[Askme::class,'reloadAskmeData']);
    Route::get('/survey_reload',[Survey::class,'reloadSurveyData']);
});



    Route::post('/login',[LoginController::class,'login'])->name('login');
    Route::get('/',[LoginController::class,'index']);
    Route::get('/login',[LoginController::class,'index']);