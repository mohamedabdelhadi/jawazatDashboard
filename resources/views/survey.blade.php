
<x-layout>
                    <!-- Page Heading -->
                    <h1 class="h3 text-primary text-right ">الاستبيان</h1>
                    

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 ">
                            <a href="#" class="btn btn-success btn-icon-split"  data-toggle="modal" data-target="#addModal">
                                <span class="icon text-white-50">
                                    <i class="fas fa-plus"></i>
                                </span>
                                <span class="text">اضافة استبيان جديد</span>
                            </a>
                        </div>
                        <div class="card-body" dir="rtl">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTablea" width="100%" cellspacing="0" dir="rtl">
                                    <thead>
                                        <tr  class="text-right">
                                            <th>الرقم</th>
                                            <th>السؤال</th>
                                            <th>احصائيات</th>
                                            <th>تعديل</th>
                                            <th>حذف</th>
                                            <th class="d-none">Question</th>
                                            <th class="d-none">Edit</th>
                                            <th class="d-none">Delete</th>
                                            
                                        </tr>
                                    </thead>
                                  
                                    <tbody>
                                        
                                            @foreach($surveys as $loopIndex => $survey)
                                            <tr  class="text-right">
                                            <td>{{ $loopIndex + 1 }}</td>
                                            <td class="arabic">{{ $survey['question_ar'] }}</td>
                                            <td>
                                                <a href="#" class="btn btn-warning btn-circle squstid"  id="{{ $survey['id'] }}">
                                                    <i class="fas fa-line-chart">A</i>
                                                </a>
                                            </td>
                                            <td class="english d-none">{{  $survey['question'] }}</td>

                                                <td class="french d-none">{{  $survey['question_fr'] }}</td>

                                                <td class="chines d-none">{{  $survey['question_zh'] }}</td>
                                            <td>
                                                <a href="#" class="btn btn-primary btn-circle editsid"  id="{{ $survey['id'] }}">
                                                    <i class="fas fa-pen"></i>
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" class="btn btn-danger btn-circle delsid"  id="{{ $survey['id'] }}">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                       
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                     <!--add Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-xl" role="document">
        <div class="modal-content ">
            <div class="modal-header" style=" background-color: #f8f9fc; border-bottom: 1px solid #e3e6f0;">
                <button type="button" class="close text-danger text-left" data-dismiss="modal" aria-label="Close">
                    {{-- <span aria-hidden="true">&times;</span> --}}
                </button>
            <h5 class="modal-title  m-0 font-weight-bold text-primary"  id="addModalLabel">اضافة سؤال للإستبيان</h5>
           
            </div>
            <div class="modal-body">
                
            
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label float-right">العربية <span class="text-danger">*</span></label>
                    <input type="text" class="form-control " dir="rtl" id="addarabic" placeholder="أدخل السؤال باللغة العربية">
                </div>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label float-right">الانجليزية</label>
                    <input type="text" class="form-control " dir="rtl" id="addenglish" placeholder="اتركه فارغًا للترجمة التلقائية">
                </div>

                <div class="form-group">
                    <label for="recipient-name" class="col-form-label float-right">الفرنسية</label>
                    <input type="text" class="form-control " dir="rtl" id="addfrench" placeholder="اتركه فارغًا للترجمة التلقائية">
                </div>

                <div class="form-group">
                    <label for="recipient-name" class="col-form-label float-right">الصينية</label>
                    <input type="text" class="form-control " dir="rtl" id="addchines" placeholder="اتركه فارغًا للترجمة التلقائية">
                </div>
                <div class="form-group">
                    <label class="form-check-label text-danger" dir="rtl" id="survey_err_panel" for="autoSizingCheck2">
                        
                      </label>
                </div>
            </div>
            <div class="modal-footer" style="border:none !important;">
                <button type="button" class="btn btn-primary" id="save_survey">حفظ</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
            
            </div>
        </div>
        </div>
    </div>
    <!-- add model -->
     <!--edit Modal -->
     <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-xl" role="document">
        <div class="modal-content ">
            <div class="modal-header" style=" background-color: #f8f9fc; border-bottom: 1px solid #e3e6f0;">
            {{-- <h5 class="modal-title  m-0 font-weight-bold text-primary"  id="editModalLabel">Edit Survey </h5> --}}
            <button type="button" class="close text-danger " data-dismiss="modal" aria-label="Close">
                {{-- <span aria-hidden="true">&times;</span> --}}
            </button>
            <h5 class="modal-title  m-0 font-weight-bold text-primary"  id="editModalLabel">تعديل الاستبيان</h5>
            </div>
            <div class="modal-body">
                
                <div class="form-group">
                  
                    <input type="hidden" class="form-control " id="editId">
                </div>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label float-right">العربية</label>
                    <input type="text" class="form-control "  dir="rtl" id="edtarabic">
                </div>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label float-right">الانجليزية</label>
                    <input type="text" class="form-control " dir="rtl" id="edtenglish" placeholder="اتركه فارغًا للترجمة التلقائية">
                </div>

                <div class="form-group">
                    <label for="recipient-name" class="col-form-label float-right">الفرنسية</label>
                    <input type="text" class="form-control" dir="rtl" id="edtfrench" placeholder="اتركه فارغًا للترجمة التلقائية">
                </div>

                <div class="form-group">
                    <label for="recipient-name" class="col-form-label float-right">الصينية</label>
                    <input type="text" class="form-control " dir="rtl" id="edtchines" placeholder="اتركه فارغًا للترجمة التلقائية">
                </div>
                <div class="form-group">
                    <label class="form-check-label text-danger" id="update_survey_err_panel" for="autoSizingCheck2">
                        
                      </label>
                </div>
            </div>
            <div class="modal-footer" style="border:none !important;">
                <button type="button" class="btn btn-warning" id="updatesurvey">تحديث</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
            
            </div>
        </div>
        </div>
    </div>
    <!-- edit model -->
       <!--analyse Modal -->
       <div class="modal fade" id="chartModal" tabindex="-1" role="dialog" aria-labelledby="chartModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg" role="document">
        <div class="modal-content ">
            <div class="modal-header" style=" background-color: #f8f9fc; border-bottom: 1px solid #e3e6f0;">
                <button type="button" class="close text-danger " data-dismiss="modal" aria-label="Close">
                    {{-- <span aria-hidden="true">&times;</span> --}}
                </button>
                <h5 class="modal-title  m-0 font-weight-bold text-primary"  id="chartModalLabel">احصائيات  </h5>
            </div>
            <div class="modal-body  justify-content-center d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label float-right" id="qusetLabel"></label>
                            
                        </div>
                       
                    </div>
                    <div class="col-lg-12">
                        <div class="chart-pie pt-4">
                            <canvas id="qusetionChart"></canvas>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="row pt-4 justify-content-around d-flex align-items-center" >

                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-bottom-dark bg-success shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-center  text-white text-uppercase mb-1">
                                                    الاجمالي</div>
                                                <div class="h5 mb-0 font-weight-bold text-center text-white" id="total_quest">0</div>
                                            </div>
                                            {{-- <div class="col-auto">
                                                <i class="fas fa-plus fa-2x text-white"></i>
                                            </div> --}}
                                        </div>
                                    </div>
                                </div>
                            </div>

                             <!-- Earnings (Monthly) Card Example -->
                             <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-bottom-success shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-center text-success text-uppercase mb-1">
                                                    راضي</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-center" id="squest_satisfied">0</div>
                                            </div>
                                            {{-- <div class="col-auto">
                                                <i class="fas fa-address-card fa-2x text-success"></i>
                                            </div> --}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Earnings (Monthly) Card Example -->
                            <div class="col-xl-3 col-md-6 mb-4">
                              <div class="card border-bottom-warning shadow h-100 py-2">
                                  <div class="card-body">
                                      <div class="row no-gutters align-items-center">
                                          <div class="col mr-2">
                                              <div class="text-xs font-weight-bold text-center text-warning text-uppercase mb-1">
                                                مقبول</div>
                                              <div class="h5 mb-0 font-weight-bold text-gray-800 text-center" id="squest_acceptable">0</div>
                                          </div>
                                          {{-- <div class="col-auto">
                                              <i class="fas fa-question fa-2x text-warning"></i>
                                          </div> --}}
                                      </div>
                                  </div>
                              </div>
                          </div>
      
                              <!-- Earnings (Monthly) Card Example -->
                              <div class="col-xl-3 col-md-6 mb-4">
                                  <div class="card border-bottom-danger shadow h-100 py-2">
                                      <div class="card-body">
                                          <div class="row no-gutters align-items-center">
                                              <div class="col mr-2">
                                                  <div class="text-xs text-center font-weight-bold text-danger text-uppercase mb-1">
                                                    غير راضي</div>
                                                  <div class="h5 mb-0 font-weight-bold text-gray-800 text-center" id="squest_notsatisfied">0</div>
                                              </div>
                                              {{-- <div class="col-auto">
                                                  <i class="fas fa-address-card fa-2x text-danger"></i>
                                              </div> --}}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                        </div>
                        {{-- <div class="mt-4 text-center small  ">
                            <span class="mr-2" >
                                <i class="fas fa-circle text-success" id="quest_satisfied" ></i> Satisfied
                            </span>
                            <span class="mr-2" >
                                <i class="fas fa-circle text-warning" id="quest_acceptable"></i> Acceptable
                            </span>
                            <span class="mr-2">
                                <i class="fas fa-circle text-danger"id="quest_notsatisfied" ></i> Not Satisfied
                            </span>
                            
                            
                        </div> --}}
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="border:none !important;">
            
                <button type="button" class="btn btn-secondary" data-dismiss="modal">اغلاق</button>
            
            </div>
        </div>
        </div>
    </div>
    <!-- analyse model -->
        <!-- Bootstrap core JavaScript-->
        {{-- <script src="{{asset('assets/vendor/jquery/jquery.min.js')}}"></script>
        <script src="{{asset('assets/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
        <script src="{{url('js/jawazat2.js')}}"></script> --}}
</x-layout>
 