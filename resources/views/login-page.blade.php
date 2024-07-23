<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{url('assets/css/bootstrap.min.css')}}">
    {{-- <link rel="stylesheet" href="{{url('frontend/assets/css/signin2.css')}}"> --}}
    <link rel="stylesheet" href="{{url('assets/css/new_signin.css')}}">
   
    <title>Jawazat::Signin</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap" rel="stylesheet">
  </head>
  <body>
    <div class="container ">
        <div class="wrapper">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-4 text-center ">
              <img src="{{url('/assets/img/j.jpg')}}"  alt="" class=" rounded w-50">
          </div>
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-4">
            <div class="row ">
              <form id="employee-form" method="post" class="pt-2 " enctype="multipart/form-data">
                @csrf
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  {{-- <input type="text" id="email" name="email" placeholder="xyz@qltyss.com"  class="form-control InputField" required> --}}
                  <input type="email" name="email" class="fldsty form-control InputField" id="email" value="" placeholder="Email Here...." required/>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 py-4">
                  <label for="exampleFormControlInput1" class="form-label">Password</label>
                  {{-- <input type="password" id="pass" name="pass"  class="form-control InputField" placeholder="************" required> --}}
                  <input type="password" name="password" class="fldsty form-control InputField" id="password" value=""  placeholder="**********" required />
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-grid p-3 button">
                  {{-- <input type="button" value="Login" id="signin-button" class="btn btn-success"> --}}
                  <button type="submit" class="submit2 signbtn p-2 signInbtn" style="">SignIn</button>
                  <div class="text-danger text-center" id="response-message"></div>
                </div>
                
              </form>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                {{-- <img src="{{url('frontend/img/qss_logo.png')}}" alt="logo" class=" rounded w-75"> --}}
              </div>
            </div>
          </div>

        </div>
      </div>
                      
</body>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

</html>
<script>
$(document).ready(function(){

            $('.signbtn').on('click', function(e){

                e.preventDefault();

                var email=$('#email').val();
                var password=$('#password').val();
                var token=$('input[name="_token"]').val();
                 if( email == "" || password == ""){
                      $('#response-message').text("Please Enter Your Correct Credentials");
                 }else{
                    $('#response-message').text("");
                    $.ajax({
    
                        url:'{{ route("login")}}',
                        type:'post',
                        data:{
                            '_token':token,
                            'email':email,
                            'password':password,
                        },
                        success:function(res){
    
                            console.log(res);
                            if(res.error){
                                $('#response-message').text(res.error).fadeIn();
                                $('#email').val("");
                                $('#password').val("");
                                setTimeout(function() {
                                    $("#response-message").fadeOut();
                                }, 5000)
                            }else{
    
                              // window.location.href = "http://localhost:8080/wiso_feedback/wiso";
                                window.location.href = "jawazat";
                            }
    
                        }
                    })

              }
            })
});
</script>