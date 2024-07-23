
<x-layout>
                    <!-- Page Heading -->
                    <h1 class="h3 text-primary text-right">اسألني</h1>
                   
                   

                    {{-- <a href="#" class="btn btn-success btn-icon-split mb-4"  data-toggle="modal" data-target="#addaskmeModal">
                        <span class="icon text-white-50">
                            <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Add New</span>
                    </a> --}}
                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 ">
                           
                           
                            <div class="row">
                                <div class="col-md-9 ">
                                    {{-- <h6 class="pt-2 font-weight-bold text-primary">Ask Me List</h6> --}}
                                    <a href="#" class="btn btn-success btn-icon-split "  data-toggle="modal" data-target="#addaskmeModal">
                                        <span class="icon text-white-50">
                                            <i class="fas fa-plus"></i>
                                        </span>
                                        <span class="text">اضافة سؤال جديد</span>
                                    </a>
                                </div>
                                <div class="col-md-3">

                                    <select class="form-control" dir="rtl" id="categorySelect">
                                        <option selected disabled>اختر الفئة</option>
                                        {{-- <option selected disabled>Select category</option> --}}
                                        <option id="0">الجميع</option>
                                        
                                        @foreach($categories as $category)
                                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                   
                        <div class="card-body" >
                            <div class="table-responsive" dir="rtl">
                                {{-- <div id="table-container"> --}}
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0"  dir="rtl">
                                    <thead>
                                        <tr class="text-right">
                                            <th >الرقم</th>
                                            <th>السؤال</th>
                                            <th>الاجابة</th>
                                            <th>تعديل</th>
                                            <th>حذف</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($askmes as $loopIndex => $askme)
                                        <tr  class="text-right">
                                            <td>{{ $loopIndex + 1 }}</td>
                                            <td class="qust_arabic">{{ $askme['question_ar'] }}</td>
                                            <td><span  class="ans_arabic">{{ $askme['answer_ar'] }}</span>
                                                
                                                <span class="qust_english d-none">{{ $askme['question'] }}</span>
                                                <span class="ans_english d-none">{{ $askme['answer'] }}</span>
    
                                                <span class="qust_french d-none">{{ $askme['question_fr'] }}</span>
                                                <span class="ans_french d-none">{{ $askme['answer_fr'] }}</span>
    
                                                <span class="qust_chines d-none">{{ $askme['question_zh'] }}</span>
                                                <span class="ans_chines d-none">{{ $askme['answer_zh'] }}</span>
                                                <span class="cate_id d-none">{{ $askme['category'] }}</span>
                                            </td>
                                       
                                            
                                            <td>
                                                <a href="#" class="btn btn-primary btn-circle edit_askmeid" id="{{ $askme['id'] }}">
                                                    <i class="fas fa-pen"></i>
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" class="btn btn-danger btn-circle del_askmeid" id="{{ $askme['id'] }}">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                    
                                </table>
                                {{-- </div> --}}
                                {{-- <div id="pagination-container"></div> --}}
                                <!-- Pagination links -->
                                {{-- {{ $askmes->links() }} --}}
                            </div>
                        </div> 
                    </div>
<!--edit Modal -->
<div class="modal fade" id="editaskmeModal" tabindex="-1" role="dialog" aria-labelledby="editaskmeModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-xl" role="document">
    <div class="modal-content ">
        <div class="modal-header" style=" background-color: #f8f9fc; border-bottom: 1px solid #e3e6f0;">
            <button type="button" class="close text-danger " data-dismiss="modal" aria-label="Close">
                {{-- <span aria-hidden="true">&times;</span> --}}
            </button>
            <h5 class="modal-title  m-0 font-weight-bold text-primary"  id="editaskmeModalLabel">تعديل الأسئلة والأجوبة</h5>
        </div>
        <div class="modal-body">
            <input type="hidden" id="get_askme_id">
            <div class="form-group ">
                {{-- <div class="row">
                    <div class="col  text-right">
                        <label for="recipient-name" class="col-form-label ">العربية <span class="text-danger">*</span></label>
                    </div>
                
                </div> --}}
                <div class="row">
                    
                    <div class="col">
                        <label for="recipient-name" class="col-form-label float-right">الاجابة بالعربية<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" dir="rtl" id="edit_arb_anw">
                    </div>
                    <div class="col">
                        <label for="recipient-name " class="col-form-label float-right">السؤال بالعربية<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" dir="rtl" id="edit_arb_qust">
                    </div>
                    
                </div>
            </div>

            <div class="form-group">
                <!-- <label for="recipient-name" class="col-form-label text-primary">English</label> -->
                <div class="row">
                    
                    <div class="col">
                        <label for="recipient-name" class="col-form-label float-right">الاجابة بالانجليزية</span></label>
                        <input type="text" class="form-control" dir="rtl" id="edit_eng_anw" placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                    <div class="col">
                        <label for="recipient-name " class="col-form-label float-right">السؤال بالانجليزية</label>
                        <input type="text" class="form-control" dir="rtl" id="edit_eng_qust" placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                   
                </div>
            </div>

            <div class="form-group">
                <!-- <label for="recipient-name" class="col-form-label  text-primary ">French</label> -->
                <div class="row">
                  
                    <div class="col">
                        <label for="recipient-name" class="col-form-label float-right">الاجابة بالفرنسية</span></label>
                        <input type="text" class="form-control" dir="rtl" id="edit_frn_anw2"  placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                    <div class="col">
                        <label for="recipient-name " class="col-form-label float-right">السؤال بالفرنسية</label>
                        <input type="text" class="form-control" dir="rtl" id="edit_frn_qust" placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <!-- <label for="recipient-name" class="col-form-label text-primary">Chines</label> -->
                <div class="row">
                    
                    <div class="col">
                        <label for="recipient-name" class="col-form-label float-right">الاجابة بالصينية</span></label>
                        <input type="text" class="form-control" dir="rtl" id="edit_chn_anw" placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                    <div class="col">
                        <label for="recipient-name " class="col-form-label float-right">السؤال بالصينية</label>
                        <input type="text" class="form-control" dir="rtl" id="edit_chn_qust" placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <!-- <label for="recipient-name" class="col-form-label  text-primary ">French</label> -->
                <div class="row">
                   
                    <div class="col">
                        <label for="recipient-name " class="col-form-label float-right">الفئة<span class="text-danger">*</span></label>
                        <select class="custom-select" dir="rtl" id="edit_askme_category" required>
                            @foreach($categories as $category)
                            <option value="{{ $category->id }}" id="{{ $category->id }}" >{{ $category->name }}</option>
                            @endforeach
                        </select>
                    </div>
                   
                </div>
            </div>
            
        
            <div class="form-group">
                <label class="form-check-label text-danger float-right"  id="update_err_panel" for="autoSizingCheck2">
                    
                  </label>
            </div>
        </div>
        <div class="modal-footer" style="border:none !important;">
            <button type="button" class="btn btn-warning" id="updateaskme">تحديث</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">اغلاق</button>
        
        </div>
    </div>
    </div>
</div>
<!-- edit model -->

<!--add Modal -->
<div class="modal fade" id="addaskmeModal" tabindex="-1" role="dialog" aria-labelledby="addaskmeModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-xl" role="document">
    <div class="modal-content ">
        <div class="modal-header" style=" background-color: #f8f9fc; border-bottom: 1px solid #e3e6f0;">
            <button type="button" class="close text-danger " data-dismiss="modal" aria-label="Close">
                {{-- <span aria-hidden="true">&times;</span> --}}
            </button>
            <h5 class="modal-title  m-0 font-weight-bold text-primary text-right"  id="addaskmeModalLabel">اضافة سؤال وجواب </h5>
        </div>
        <div class="modal-body">
            
        
            <div class="form-group ">
                {{-- <div class="row">
                    <div class="col  text-right">
                        <label for="recipient-name" class="col-form-label ">العربية <span class="text-danger">*</span></label>
                    </div>
                
                </div> --}}
                <div class="row">
                    
                    <div class="col">
                        <label for="recipient-name" class="col-form-label float-right">الاجابة بالعربية<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" dir="rtl" id="add_arb_anw" placeholder="أدخل السؤال باللغة العربية">
                    </div>
                    <div class="col">
                        <label for="recipient-name " class="col-form-label float-right">السؤال بالعربية<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" dir="rtl" id="add_arb_qust" placeholder="أدخل السؤال باللغة العربية">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <!-- <label for="recipient-name" class="col-form-label text-primary">English</label> -->
                <div class="row">
                    
                    <div class="col">
                        <label for="recipient-name" class="col-form-label float-right">الاجابة بالانجليزية</span></label>
                        <input type="text" class="form-control" dir="rtl" id="add_eng_anw"  placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                    <div class="col">
                        <label for="recipient-name " class="col-form-label float-right">السؤال بالانجليزية</label>
                        <input type="text" class="form-control" dir="rtl" id="add_eng_qust" placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                   
                </div>
            </div>

            <div class="form-group">
                <!-- <label for="recipient-name" class="col-form-label  text-primary ">french</label> -->
                <div class="row">
                    
                    <div class="col">
                        <label for="recipient-name" class="col-form-label float-right">الاجابة بالفرنسية</span></label>
                        <input type="text" class="form-control" dir="rtl" id="add_frn_anw2"  placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                    <div class="col">
                        <label for="recipient-name " class="col-form-label float-right"><Fieldset></Fieldset>السؤال بالفرنسية</label>
                        <input type="text" class="form-control" dir="rtl" id="add_frn_qust" placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                   
                </div>
            </div>

            <div class="form-group">
                <!-- <label for="recipient-name" class="col-form-label text-primary">Chines</label> -->
                <div class="row">
                   
                    <div class="col">
                        <label for="recipient-name" class="col-form-label float-right">الاجابة بالصينية</span></label>
                        <input type="text" class="form-control" dir="rtl" id="add_chn_anw"  placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                    <div class="col">
                        <label for="recipient-name " class="col-form-label float-right">السؤال بالصينية</label>
                        <input type="text" class="form-control" dir="rtl" id="add_chn_qust" placeholder="اتركه فارغًا للترجمة التلقائية">
                    </div>
                   
                </div>
            </div>
            <div class="form-group">
                <!-- <label for="recipient-name" class="col-form-label  text-primary ">French</label> -->
                <div class="row">
                   
                    <div class="col">
                        <label for="recipient-name " class="col-form-label float-right">الفئة<span class="text-danger">*</span></label>
                        <select class="custom-select" id="add_askme_category" dir="rtl" required>
                            <option selected disabled value="">اختر الفئة</option>
                            @foreach($categories as $category)
                            <option value="{{ $category->id }}" id="{{ $category->id }}">{{ $category->name }}</option>
                            @endforeach
                        </select>
                    </div>
                   
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-check-label text-danger float-right" id="err_panel" for="autoSizingCheck2">
                    
                  </label>
            </div>

        </div>
        <div class="modal-footer" style="border:none !important;">
            <button type="button" class="btn btn-primary" id="askme_add">حفظ</button>
        <button type="button" class="btn btn-secondary" id="askmeClose" data-dismiss="modal">الغاء</button>
        
        </div>
    </div>
    </div>
</div>
<!-- add model -->


                         {{-- <!-- Bootstrap core JavaScript-->
                    <script src="{{asset('assets/vendor/jquery/jquery.min.js')}}"></script>
                    <script src="{{asset('assets/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
                    <script src="{{url('js/jawazat2.js')}}"></script> --}}
                    <script>
                     
                        // $(document).ready(function() {
                        //     var currentPage = 1;
                        //     var itemsPerPage = 10; // Number of items per page
                        //     var totalItems = {{ count($askmes) }}; // Total number of items
                        
                        //     // Function to display items for the current page
                        //     function displayItems() {
                        //         var startIndex = (currentPage - 1) * itemsPerPage;
                        //         var endIndex = startIndex + itemsPerPage;
                        //         $('#dataTable tbody tr').hide().slice(startIndex, endIndex).show();
                        //     }
                        
                        //     // Function to render pagination links
                        //     function renderPagination() {
                        //         var totalPages = Math.ceil(totalItems / itemsPerPage);
                        //         var paginationHtml = '';
                        
                        //         for (var i = 1; i <= totalPages; i++) {
                        //             paginationHtml += '<a href="#" class="page-link">' + i + '</a>';
                        //         }
                        
                        //         $('#pagination-container').html(paginationHtml);
                        //     }
                        
                        //     // Attach click event handler to pagination links
                        //     $(document).on('click', '#pagination-container a.page-link', function(e) {
                        //         e.preventDefault();
                        //         currentPage = parseInt($(this).text());
                        //         displayItems();
                        //     });
                        
                        //     // Call the initial display function and pagination rendering function
                        //     displayItems();
                        //     renderPagination();
                        // });
                        </script>
                               
</x-layout>
