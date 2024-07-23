<x-layout>
                        <!-- Content Row -->
                        <div class="row " >

                            <!-- Earnings (Monthly) Card Example -->
                            <div class="col-xl-2 col-md-6 mb-4">
                                <div class="card border-left-dark bg-success shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-white text-uppercase mb-1">
                                                    الاجمالي</div>
                                                <div class="h5 mb-0 font-weight-bold text-white" id="total_usage"></div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="fas fa-plus fa-2x text-white"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Earnings (Monthly) Card Example -->
                            <div class="col-xl-2 col-md-6 mb-4">
                              <div class="card border-left-success shadow h-100 py-2">
                                  <div class="card-body">
                                      <div class="row no-gutters align-items-center">
                                          <div class="col mr-2">
                                              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                  الاستبيان</div>
                                              <div class="h5 mb-0 font-weight-bold text-gray-800" id="survey_card_text"></div>
                                          </div>
                                          <div class="col-auto">
                                              <i class="fas fa-address-card fa-2x text-success"></i>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!-- Earnings (Monthly) Card Example -->
                          <div class="col-xl-2 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                اسألني</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800" id="askme_card_text"></div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-question fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                            <!-- Earnings (Monthly) Card Example -->
                            <div class="col-xl-2 col-md-6 mb-4">
                                <div class="card border-left-success shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    الدعم</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800" id="support_card_text"></div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="fas fa-address-card fa-2x text-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Earnings (Monthly) Card Example -->
                            <div class="col-xl-2 col-md-6 mb-4">
                                <div class="card border-left-info shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                                                    الاقتراحات</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800" id="suggestion_card_text"></div>
                                                
                                            </div>
                                            <div class="col-auto">
                                                <i class="fas fa-clipboard-list fa-2x text-info"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Pending Requests Card Example -->
                            <div class="col-xl-2 col-md-6 mb-4">
                                <div class="card border-left-warning shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                    الإجراءات</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800" id="procedure_card_text"></div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="fas fa-cogs fa-2x text-warning"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        
    
                        <!-- Content Row -->
    
                        <div class="row">
    
                            <!-- Area Chart -->
                            <div class="col-xl-5 col-lg-7">
                                <div class="card shadow mb-4">
                                    <!-- Card Header - Dropdown -->
                                    <div class="card-header py-3  d-flex flex-row align-items-end justify-content-between" dir="rtl">
                                        <h6 class="m-0 font-weight-bold text-primary">استخدام الروبوت</h6>
                                        
                                    </div>
                                    <!-- Card Body -->
                                    <div class="card-body">
                                       
                                        <div class="chart-area py-4 mb-4">
                                            <h5 class="text-center  hide" id="robot_usage_nodata"> لا توجد بيانات في هذا التاريخ</h5>
                                            <canvas id="RoboUsageChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Pie Chart -->
                            <div class="col-xl-4 col-lg-5">
                                <div class="card shadow mb-4">
                                    <!-- Card Header - Dropdown -->
                                    <div
                                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between"  dir="rtl">
                                        <h6 class="m-0 font-weight-bold text-primary">الاستبيان</h6>
                                        
                                    </div>
                                    <!-- Card Body -->
                                    <div class="card-body">
                                        
                                        <div class="chart-pie pt-4 pb-2 ">
                                            <h5 class="text-center  hide" id="survey_nodata"> لا توجد بيانات في هذا التاريخ.</h5>
                                            <canvas id="myPieChart"></canvas>
                                        </div>
                                        <div class="mt-1 text-center small  ">
                                            <span class="mr-2" >
                                                 راضي<i class="fas fa-circle text-success" id="satisfied" ></i>
                                            </span>
                                            <br>
                                            <span class="mr-2">
                                                 غير راضي<i class="fas fa-circle text-danger"id="notsatisfied" ></i>
                                            </span>

                                            <br>
                                            <span class="mr-2" >
                                                مقبول<i class="fas fa-circle text-warning" id="acceptable"></i> 
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <!-- date structure -->
                            <div class="col-xl-3 col-lg-5">
                              <div class="card shadow mb-4">
                                  <!-- Card Header - Dropdown -->
                                  <div
                                      class="card-header py-3 d-flex flex-row align-items-center justify-content-between"  dir="rtl">
                                      <h6 class="m-0 font-weight-bold text-primary">تصفية بالتاريخ</h6>
                                      
                                  </div>
                                  <!-- Card Body -->
                                  <div class="card-body">
                                      <div class="chart-pie pt-3 pb-2">
                                          <!-- <canvas id="myPieChart"></canvas> -->
                                          <div class="col-lg-12">
                                            <label  class="form-label fw-bold text-dark float-right" >تاريخ البداية</label>
                                            <input type="date" class="form-control form-control-sm getdate" placeholder="From date" id="startDate" >
                                        </div>
                                        <div class="col-lg-12 pt-4" >
                                            <label class="form-label fw-bold text-dark  float-right">تاريخ النهاية</label>
                                            <input type="date" class="form-control form-control-sm getdate" paceholder="To date" id="endDate">
                                        </div>
                                       
                                      </div>
                                      <div class=" text-center mb-4">
                                        <div class="row">
                                            <div class="col-lg-6  col-xl-6 col-md-6 col-sm-6 col-6 ">
                                                <h6 class=" bg-warning  p-2 text-white rounded"  style="width:5rem; cursor: pointer;" id="exptExcel">تصدير</h6>
                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-6  col-6">
                                                <h6 class=" bg-danger  p-2 text-white float-right rounded" style="width:5rem  cursor: pointer;"id="reset">اعادة ضبط</h6>
                                            </div>
                                        </div>
                                         
                                         
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
    
                        <!-- Content Row -->
                        <div class="row">
    
                            <!-- Content Column -->
                            <div class="col-lg-12 mb-4" >
                                <div class="card shadow mb-4"  >
                                    <div class="card-header py-3  " >
                                        <h6 class="m-0 font-weight-bold text-primary float-right" >ايقونات الروبوت</h6>
                                        <br>
                                        <p class="m-0  text-secondary font-weight-bold float-right" style="font-size: 11px;"> اضغط لـ <span class="text-success">تشغيل</span> / <span class="text-danger">ايقاف </span>خدمات الروبوت </p>
                                    
                                    </div>
                                    <div class="row p-4 d-flex justify-content-between" id="divContainer">

                                            {{-- New div is generating here dynamically from backend --}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
</x-layout>