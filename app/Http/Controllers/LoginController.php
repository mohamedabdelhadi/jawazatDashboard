<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return view('login-page');
    }
    public function login(Request $request){


        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $id = Auth::id();
            $user = User::find($id);
            session_start();
            $request->session()->put('user_id',$id);
            $request->session()->put('name',$user->name);
            $request->session()->put('email',$user->email);
            return response()->json(['success'=>'User has been get.....']);

        }else{
            return response()->json(['error'=>'Email Or Password is Wrong ']);
        }

       
    }
    public function logout(Request $request)
    {
        $request->session()->flush();
        Auth::logout();
        return redirect()->to('https://jawazat.qssdemo.com');
    }
}
