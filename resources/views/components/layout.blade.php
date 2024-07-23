<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Jawazat</title>

    <!-- Custom fonts for this template-->
    <link href="{{asset('assets/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="{{asset('assets/vendor/datatables/dataTables.bootstrap4.min.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/sb-admin-2.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/loader.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/alert.css')}}" rel="stylesheet">


</head>

<body id="page-top">

    <div class="row d-none" id="loaderrow">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 rounded d-flex flex-column justify-content-center  align-items-center " style="height:75vh;">
            <div class="loader" role="alert" aria-live="assertive"></div>
            {{-- <h1 class="text-success mt-5">Loading . . .</h1> --}}
        </div>

        
    </div>


    <div class="alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered   alert-bottom-right" id="salert">
        <button type="button" class="close font__size-18" data-dismiss="alert">
            <span aria-hidden="true">
                {{-- <a>
                  <i class="fa fa-times greencross"></i>
                </a> --}}
            </span>
            {{-- <span class="sr-only">Close</span>  --}}
        </button>
        <i class="start-icon far fa-check-circle faa-tada animated"></i>
        <strong class="font__weight-semibold"></strong> <span class="alert-message"></span>
      </div>



    <!-- Page Wrapper -->
    <div id="wrapper">


        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" dir="rtl">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link  rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Search -->
                    

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav mr-auto">

                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        
                        

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 large font-bold ml-3">المدير</span>
                                <img class="img-profile rounded-circle"
                                    src="{{asset('assets/img/jwzt.png')}}">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                               
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    تسجيل الخروج
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    {{ $slot }}

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto font-weight-bold">
                        <span class="text-dark ">  المديرية العامة للجوازات - المملكة العربية السعودية <span id="currentYear"></span></span>
                        {{-- <span >Copyright &copy; <span class="text-dark ">  Ministry of Interior-Kingdom of Saudi Arabia <span id="currentYear"></span></span></span> --}}
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/jawazat">
                <div class="sidebar-brand-icon">
                    <img src="{{asset('assets/img/jwz.png')}}" alt="" class="w-50">
                </div>
                
            </a>

          

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active ">
                <a class="nav-link text-center" href="/jawazat">
                    
                    <span>المديرية العامة للجوازات</span>
                    {{-- <br>
                    <span>Kingdom of Saudi Arabia</span> --}}
                </a>
            </li>

            <!-- Divider -->
            

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading  text-right">
                {{-- INTERFACE --}}
            </div>


            <!-- Nav Item - Charts -->
            <li class="nav-item ">
                <a class="nav-link  text-right" href="/jawazat">
                   
                    {{-- <span>Dashboard</span> --}}
                    <span>لوحة التحكم</span>
                    <i class="fas fa-fw fa-tachometer-alt text-white"></i>
                </a>
                    
            </li>
            <li class="nav-item">
                <a class="nav-link  text-right" href="/survey">
                    
                    {{-- <span>Survey</span> --}}
                    <span>الاستبيان</span>
                    <i class="fas fa-fw fa-address-card text-white"></i>
                </a>
            </li>

            <!-- Nav Items-->
            <li class="nav-item">
                <a class="nav-link  text-right" href="/askme">
                    
                    <span>اسألني</span>
                    {{-- <span>Ask Me</span> --}}
                    <i class="fas fa-fw fa-question text-white"></i>
                </a>
            </li>
            

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

      

           

        </ul>
        <!-- End of Sidebar -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top bg-success rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document" >
            <div class="modal-content" style="background:#165938; color:white">
                <div class="modal-header float-right" style="border:1px solid #8080804d" dir="rtl">
                    <h5 class="modal-title " id="exampleModalLabel">المديرية العامة للجوازات</h5>
                    {{-- <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button> --}}
                </div>
                <div class="modal-body text-right">هل انت متأكد انك تريد تسجيل الخروج</div>
                <div class="modal-footer"  style="border:none">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">الغاء</button>
                    <a class="btn btn-warning" href="/logout">تسجيل الخروج</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="{{asset('assets/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('assets/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

    <!-- Core plugin JavaScript-->
    <script src="{{asset('assets/vendor/jquery-easing/jquery.easing.min.js')}}"></script>

    <!-- Custom scripts for all pages-->
    <script src="{{asset('assets/js/sb-admin-2.min.js')}}"></script>

    <!-- Page level plugins -->
    {{-- <script src="{{asset('assets/vendor/chart.js/Chart.min.js')}}"></script> --}}
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://unpkg.com/chart.js-plugin-labels-dv/dist/chartjs-plugin-labels.min.js"></script>
     <!-- Page level plugins -->
     <script src="{{asset('assets/vendor/datatables/jquery.dataTables.min.js')}}"></script>
     <script src="{{asset('assets/vendor/datatables/dataTables.bootstrap4.min.js')}}"></script>
 
     
     <!-- Page level custom scripts -->
     <script src="{{asset('assets/js/demo/chart-area-demo.js')}}"></script>
     <script src="{{asset('assets/js/demo/chart-pie-demo.js')}}"></script>
     <script src="{{asset('assets/js/demo/datatables-demo.js')}}"></script>
     {{-- <script src="{{asset('assets/js/demo/chart-bar-demo.js')}}"></script> --}}
     {{-- custom Js File --}}
     <script src="{{url('js/jawazat.js')}}"></script>
     <script src="{{url('js/jawazat2.js')}}"></script>
        
      
    <script>
        $(document).ready(function() {

            
            $('.chngservices').on('click', function() {
            var card = $(this).find('.card');
            var isBgSuccess = card.hasClass('bg-success');

            // Determine the message based on the current class
            var message = isBgSuccess ? "Are you sure you want to disable?" : "Are you sure you want to enable?";
            var action = isBgSuccess ? "disabled" : "enabled";

            // Confirm with the user
            var confirmed = confirm(message);

            if (confirmed) {
                // Toggle classes
                card.toggleClass('bg-success bg-secondary');
                
            }
        });

        


        var currentYear = new Date().getFullYear();      
        $("#currentYear").text(currentYear);
        });

    </script>
</body>

</html>