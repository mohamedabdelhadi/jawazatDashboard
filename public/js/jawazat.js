$(document).ready(function () {

    var baseUrl = "http://192.168.200.74:8000";
    var apikey = "@J2w1_z!@T?zz";

    // $("#userDropdown").on('click', function(){
    //     $("#logoutModale").model("show")
    // });

    // $("#userDropdown").on('click', function(){
    //     $("#logoutModale").modal("show"); // Use modal instead of model
    // });
    //Function Calls
    get_robot_usage_data();
    get_survey_data_overall();
    // get_survey_data_joined();
    get_askme_data();
    get_robot_functions();

    //Global Variables
    window.satisfiedVar = 0;
    window.unsatisfiedVar= 0;
    window.acceptableVarVar= 0;

    //update chart
    function updateChart(chart, newData) {

        chart.data.datasets[0].data = newData;
        chart.update();
    }


        //update chart
        $(document).on('click', '.chngservices',function() {
           
            var id = $(this).attr('id');
            
            var card = $(this).find('.card');
            var isBgSuccess = card.hasClass('bg-success');
    
            // Determine the message based on the current class
            var message = isBgSuccess ? "هل انت متأكد انك تريد ايقاف الخدمة ؟" : "هل انت متأكد انك تريد تشغيل الخدمة ؟";
            var action = isBgSuccess ? "disabled" : "enabled";
            var data = {
                id: id,
                type: 'toggle'
                
            };
            
            // Convert the data object to a JSON string
            var dataJson = JSON.stringify(data);
            // Confirm with the user
            var confirmed = confirm(message);
    
            if (confirmed) {
                $("#loaderrow").removeClass("d-none");
                // Toggle classes
                $.ajax({
                    url: `${baseUrl}/update`, // Replace with your Node.js API URL
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json', // Standard header for JSON content
                        'apikey': `${apikey}`, // Replace with your actual API key
                          },
                
                    data: dataJson,
                    success: function(response) {
                        alertmsg('Success','! Successfully updated the Service.');  
                        $("#loaderrow").addClass("d-none");
                        
                        card.toggleClass('bg-success bg-secondary');
                    },
                    error: function(xhr, status, error) {
                        //console.log(error)
                        $("#loaderrow").addClass("d-none");
                        alertmsg('Failed','! Error updating the Service'); 
                        
                    }
                });
               
                
            }
        });
    
    
        function alertmsg(status, message) {
            // Get the alert element
            var alertElement = $('#salert');
        
            // Remove any existing alert classes
            alertElement.removeClass('alert-success alert-danger');
        
            // Set the message of the alert
            alertElement.find('.font__weight-semibold').text(status);
            alertElement.find('.alert-message').text(message);
        
            // Add the appropriate alert class based on the status
            if (status.toLowerCase() === 'success') {
                alertElement.addClass('alert-success');
            } else if (status.toLowerCase() === 'failed' || status.toLowerCase() === 'failure') {
                alertElement.addClass('alert-danger');
            }
        
            // Show the alert by adding the 'show' class
            alertElement.addClass('show');
        
            // Hide the alert after 5 seconds
            setTimeout(function() {
                alertElement.removeClass('show');
            }, 3000);
        }
    
        

    // Robot usage chart 
var xlValues = ["الاستبيان","اسألني","الدعم","الاقتراحات","الإجراءات"];
// var xlValues = ["Survey","Ask Me","Support","Suggesstions","Procedures"];
var ylValues = [338, 563, 195, 145, 375]; // Update with your numerical values
var lbarColors = [
    "#502c84",
    "#ef4129",
    "#2574bb",
    '#f26122',
    '#06a7e0',
];
var RoboUsageChart = new Chart("RoboUsageChart", {
    type: "bar",
    data: {
        labels: xlValues,
        datasets: [{
            backgroundColor: lbarColors,
            data: ylValues,
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 0, // Remove the lborder lines behind the bars
            datalabels: {
                display: false, // Set display to false to hide labels on bars
            }
        }]
    },
    options: {
        plugins: {
            title: {
                display: false,
                text: "Chart represent",
                color: "white"
            },
            legend: {
                display: false
                
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                   
                },
                ticks: {
                    color: 'black' // Change x-axis label color
                }
            },
            y: {
                grid: {
                    display: true 
                    
                    
                },
                ticks: {
                    color: 'black', // Change y-axis label color
                   
                }
            }
        }
    }
});

// Survey Chart 
// var xsValues = ["Acceptable", "Not-Satisfied", "Satisfied"];
var xsValues = ["مقبول", "غير راضي", "راضي"];
var ysValues = [20,30,50]; // Update with your numerical values
var sbarColors = [
    "#F6C23E",
    "#E74A3B",
    "#1CC88A"
];
var sHoverColors = [
    "#F6C23E",
    "#E74A3B",
    "#1CC88A"
];
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    // labels: xsValues,
    datasets: [{
      data: ysValues,
      backgroundColor: sbarColors,
      hoverBackgroundColor: sHoverColors,
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      
    }],
  },
  options: {
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

//Get Robot Usage Data
function get_robot_usage_data(){
        var s = $('#startDate').val();
        var e = $('#endDate').val();
        // var s = '01/01/2023'
        // var e = '12/01/2023'
        // //console.log('startdate: ',s);
        // //console.log('enddate: ',e);
        if(s !== "" && e !== ""){
            //console.log('valuse are not null');
            var date = new Date(s);
            var currentTime = new Date();
            date.setHours(0);
            date.setMinutes(1);
            date.setSeconds(0);
            var year = date.getFullYear();
            var month = String(date.getMonth() + 1).padStart(2, '0');
            var day = String(date.getDate()).padStart(2, '0');
            var hours = String(date.getHours()).padStart(2, '0');
            var minutes = String(date.getMinutes()).padStart(2, '0');
            var seconds = String(date.getSeconds()).padStart(2, '0');
            var s = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            
            //console.log('now startdate: ',s);
           
            
        
            var edate = new Date(e);
            var currentTime = new Date();
            edate.setHours(23);
            edate.setMinutes(59);
            edate.setSeconds(59);
            var eyear = edate.getFullYear();
            var emonth = String(edate.getMonth() + 1).padStart(2, '0');
            var eday = String(edate.getDate()).padStart(2, '0');
            var ehours = String(edate.getHours()).padStart(2, '0');
            var eminutes = String(edate.getMinutes()).padStart(2, '0');
            var eseconds = String(edate.getSeconds()).padStart(2, '0');
            var e = `${eyear}-${emonth}-${eday} ${ehours}:${eminutes}:${eseconds}`;
            //console.log('now enddate: ',e);
            // Log the formatted date-time string
       

        }
        $("#survey_card_text").text("0");
        $("#askme_card_text").text("0");
        $("#support_card_text").text("0");
        $("#suggestion_card_text").text("0");
        $("#procedure_card_text").text("0");


     
        $.ajax({
            type: "GET",
            url: "get_robot_usage_data",
            data: {
                's': s,
                'e': e,
            },
            dataType: 'json',
            success: function (response) {
                console.log('robo usage-Response:', response);

                $("#robot_usage_nodata").addClass("hide");
                if (response && Object.keys(response).length > 0) {
                    var mylist = [0,0,0,0,0];
                    var sum = 0;
                   

                    
                    $.each(response, function (key, item) {
                        sum += item;
                        if (key === "survey") {
                            $("#survey_card_text").text(item);
                            mylist[0]=item;
                        } else if (key === "ask_me") {
                            
                            $("#askme_card_text").text(item);
                            mylist[1]=item;
                        } else if (key === "support") {
                            
                            $("#support_card_text").text(item);
                            mylist[2]=item;
                        } else if (key === "sugg_comp") {
                            
                            $("#suggestion_card_text").text(item);
                            mylist[3]=item;
                        } else if (key === "procedures") {
                            $("#procedure_card_text").text(item);
                            mylist[4]=item;
                        } 
                        //mylist.push(item);
                    });
                    //console.log('my list of robot: ',mylist);
                    $("#total_usage").text(sum);
                    $("#langData").text(sum);
                    updateChart(RoboUsageChart, mylist);
                } else {
                    // If no data, display a message
                    
                    $("#robot_usage_nodata").removeClass("hide");
                    updateChart(RoboUsageChart, [0, 0, 0, 0, 0]);
                    // You might want to clear other fields or show appropriate messages for each
                    $("#total_usage").text("0");
                    $("#survey_card_text").text("0");
                    $("#askme_card_text").text("0");
                    $("#support_card_text").text("0");
                    $("#suggestion_card_text").text("0");
                    $("#procedure_card_text").text("0");

                }
            },
            error: function (xhr, status, error) {
                //console.log('Error:', error);
            }
        });
}
//Get Survey Data
function get_survey_data_overall(){
    var s = $('#startDate').val();
    var e = $('#endDate').val();
    // var s = '03/01/2024'
    // var e = '05/31/2024'
if(s !== "" && e !== ""){
    var date = new Date(s);
    var currentTime = new Date();
    date.setHours(0);
    date.setMinutes(1);
    date.setSeconds(0);
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0');
    // var s = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    var s = `${year}-${month}-${day}`;
    

    ////console.log(s);
    

    var edate = new Date(e);
    var currentTime = new Date();
    edate.setHours(23);
    edate.setMinutes(59);
    edate.setSeconds(59);
    var eyear = edate.getFullYear();
    var emonth = String(edate.getMonth() + 1).padStart(2, '0');
    var eday = String(edate.getDate()).padStart(2, '0');
    var ehours = String(edate.getHours()).padStart(2, '0');
    var eminutes = String(edate.getMinutes()).padStart(2, '0');
    var eseconds = String(edate.getSeconds()).padStart(2, '0');
    var e = `${eyear}-${emonth}-${eday}`;
    
    // Log the formatted date-time string
    ////console.log(e);

}
$('#acceptable').text("0%");
$('#notsatisfied').text("0%");
$('#satisfied').text("0%");
$.ajax({
    type: "GET",
    url: "get_survey_data_overall",
    data: {
        's': s,
        'e': e,
    },
    dataType: 'json',
    success: function (response) {
        $("#survey_nodata").addClass("hide");
        if (response && Object.keys(response).length > 0) {
            console.log('Survey data:', response);

            acceptableVar=0;
            satisfiedVar = 0;
            unsatisfiedVar = 0;


            var mylist = [0,0,0];
            var sum = 0;

            $.each(response, function (key, item) {
                sum += item;
               
            });

            // Handling missing keys
            if (!response.hasOwnProperty("Acceptable")) {
                acceptableVar = 0;
            }
            if (!response.hasOwnProperty("Not Satisfied")) {
                unsatisfiedVar = 0;
            }
            if (!response.hasOwnProperty("Satisfied")) {
                satisfiedVar = 0;
            }

            $.each(response, function (key, item) {
                item = (item / sum) * 100;
                if (key === "Acceptable") {
                acceptableVarVar = item;
                    item.toFixed(1)
                    $('#acceptable').text(" "+ item.toFixed(1) + "%");
                    mylist[0]=item.toFixed(1);
                } else if (key === "Not Satisfied") {
                    unsatisfiedVar = item;
                    $('#notsatisfied').text(" "+ item.toFixed(1)+ "%");
                    mylist[1]=item.toFixed(1);
                }
                else if (key === "Satisfied") {
                    satisfiedVar = item;
                    $('#satisfied').text(" "+ item.toFixed(1)+ "%");
                    mylist[2]=item.toFixed(1);
                }
            });
                //mylist.push(Math.floor(item));

            //console.log('Survey list:', mylist);
            updateChart(myPieChart, mylist);
        } else {
            //console.log('survey No data or incorrect data structure in response.');
            updateChart(myPieChart, [0,0,0]);
            $("#survey_nodata").removeClass("hide");
            $('#acceptable').text(" "+ 0 + "%");
            $('#notsatisfied').text(" "+ 0+ "%");
            $('#satisfied').text(" "+ 0 + "%");
         
           
        }
    },
    error: function (xhr, status, error) {
        //console.log('Error:', status, error);
        // Handle error or show appropriate message to the user
    }
});
}

function get_survey_data_joined(){
    // var s = '05/01/2024'
    // var e = '05/31/2024'
if(s !== undefined && e !== undefined){
    var date = new Date(s);
    var currentTime = new Date();
    date.setHours(0);
    date.setMinutes(1);
    date.setSeconds(0);
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0');
    // var s = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    var s = `${year}-${month}-${day}`;
    

    ////console.log(s);
    

    var edate = new Date(e);
    var currentTime = new Date();
    edate.setHours(23);
    edate.setMinutes(59);
    edate.setSeconds(59);
    var eyear = edate.getFullYear();
    var emonth = String(edate.getMonth() + 1).padStart(2, '0');
    var eday = String(edate.getDate()).padStart(2, '0');
    var ehours = String(edate.getHours()).padStart(2, '0');
    var eminutes = String(edate.getMinutes()).padStart(2, '0');
    var eseconds = String(edate.getSeconds()).padStart(2, '0');
    var e = `${eyear}-${emonth}-${eday}`;
    
    // Log the formatted date-time string
    ////console.log(e);

}
    
    $.ajax({
        url: 'get_survey_data_joined', // URL to send the request
        type: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
        data: {
            'start_date': s,
            'end_date': e,
        },

        dataType: 'json', // The expected data type of the response
        success: function(response) {
            // Function to be executed if the request succeeds
            if (response && Object.keys(response).length > 0) {
            //console.log('Survey Data wit Q/A:', response);
        }
        else {
            //console.log('Joined survey No data or incorrect data structure in response.');
         
           
        }
        },
        error: function(xhr, status, error) {
            // Function to be executed if the request fails
            //console.log('Error:', xhr.responseText);
            //console.log('Status:', status);
            //console.log('Error:', error);
        }
    });
}
function get_askme_data(){
    // var s = '05/01/2024'
    // var e = '05/31/2024'
if(s !== undefined && e !== undefined){
    var date = new Date(s);
    var currentTime = new Date();
    date.setHours(0);
    date.setMinutes(1);
    date.setSeconds(0);
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0');
    // var s = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    var s = `${year}-${month}-${day}`;
    

    ////console.log(s);
    

    var edate = new Date(e);
    var currentTime = new Date();
    edate.setHours(23);
    edate.setMinutes(59);
    edate.setSeconds(59);
    var eyear = edate.getFullYear();
    var emonth = String(edate.getMonth() + 1).padStart(2, '0');
    var eday = String(edate.getDate()).padStart(2, '0');
    var ehours = String(edate.getHours()).padStart(2, '0');
    var eminutes = String(edate.getMinutes()).padStart(2, '0');
    var eseconds = String(edate.getSeconds()).padStart(2, '0');
    var e = `${eyear}-${emonth}-${eday}`;
    
    // Log the formatted date-time string
    ////console.log(e);

}
    
    $.ajax({
        url: 'get_askme_data', // URL to send the request
        type: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
        data: {
            'start_date': s,
            'end_date': e,
        },

        dataType: 'json', // The expected data type of the response
        success: function(response) {
            // Function to be executed if the request succeeds
            if (response && Object.keys(response).length > 0) {
            //console.log('Ask Me Data:', response);
        }
        else {
            //console.log('Joined Ask Me No data or incorrect data structure in response.');
         
           
        }
        },
        error: function(xhr, status, error) {
            // Function to be executed if the request fails
            //console.log('Error:', xhr.responseText);
            //console.log('Status:', status);
            //console.log('Error:', error);
        }
    });
}
function get_robot_functions(){
    $.ajax({
        url: 'get_robot_functions', // URL to send the request
        type: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
        dataType: 'json', // The expected data type of the response
        success: function(response) {
            var askmeimg ="assets/img/askme.png";
            var surveyimg ="assets/img/survey.png";
            var procedureimg ="assets/img/procedure.png";
            var support ="assets/img/support.png";
            var takemeimg ="assets/img/Ask Me.png";
            var suggestionsimg ="assets/img/askme.png";
            var name="";
            var names="";
            // Function to be executed if the request succeeds 
            var divContainer = $('#divContainer');
            if (response && Object.keys(response).length > 0) {
            //console.log('Robot Functions: ', response);
            $.each(response, function(index, item) {
                var imgSrc;
                if (item.name === 'ask_me') {
                    name="اسألني";
                    names="Ask Me";
                    imgSrc =`assets/img/${names}.png`;
                    
                } else if (item.name === 'survey') {
                    name="الاستبيان";
                    names="Survey";
                    imgSrc =`assets/img/${names}.png`;
                } else if (item.name === 'procedures') {
                    name="الإجراءات"
                    names="Procedures"
                    imgSrc =`assets/img/${names}.png`;
                } else if (item.name === 'support') {
                    name="الدعم";
                    names="Support";
                    imgSrc =`assets/img/${names}.png`;
                } else if (item.name === 'take_me') {
                    return true
                } else if (item.name === 'suggestions') {
                    name="الاقتراحات",
                    names="Suggestions",
                    imgSrc =`assets/img/${names}.png`;
                } else {
                    // Default image source if item.name doesn't match any of the predefined names
                    imgSrc = ''; // Provide default image source here
                }
                var newDiv = $('<div>', {
                    class: 'col-lg-2 mb-4 text-center chngservices',
                    'id':item.id,
                    'data-name':item.name,
                }).append(
                    $('<div>', {
                        class: 'card ' + (item.status === 1 ? 'bg-success' : 'bg-secondary') + ' text-white shadow'
                    }).append(
                        $('<div>', { class: 'card-body' }).append(
                            $('<img>', {
                                class: 'img-fluid px-3 px-sm-4 mt-3 mb-4',
                                src: imgSrc,
                                alt: item.name
                            }),
                            $('<div>', {
                                class: 'text-white',
                                text: name
                            })
                        )
                    )
                );
                divContainer.append(newDiv);
            });


        }
        else {
            //console.log('Robot Functions no data or incorrect data structure in response.');
         
           
        }
        },
        error: function(xhr, status, error) {
            // Function to be executed if the request fails
            //console.log('Error:', xhr.responseText);
            //console.log('Status:', status);
            //console.log('Error:', error);
        }
    });

}

$('#categorySelect').change(function(){
    var categoryId = $(this).val();
    //console.log("Selected Category ID: " + categoryId);
    // You can perform further actions with the selected category ID here
  });


  //change date start here
  $('.getdate').on('change', function (e) {
        
    e.preventDefault();

    
    var s = $('#startDate').val();
    var e = $('#endDate').val();
  
    if (e == "") {
        $('#endDate').focus();
        



    }
    if (s == "") {
        $('#startDate').focus();

    } else if (e != "" && s != "") {

        get_robot_usage_data();
        get_survey_data_overall();
        get_survey_data_joined();
        get_askme_data();
       
    }

});
//change date end here
//Survey Reload
function survey_reload(){
    $.ajax({
        url: 'survey_reload', // URL to send the request
        type: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
        dataType: 'json', // The expected data type of the response
        success: function(response) {
            // Function to be executed if the request succeeds
            if (response && Object.keys(response).length > 0) {
            //console.log('Survey Reload:', response);
                        var tbody = $('#dataTablea');
                tbody.empty(); // Clear existing rows

                $.each(data, function(index, survey) {
                    var row = $('<tr>');
                    row.append('<td>' + (index + 1) + '</td>');
                    row.append('<td class="arabic">' + survey.question_ar + '</td>');
                    row.append('<td class="english d-none">' + survey.question + '</td>');
                    row.append('<td class="french d-none">' + survey.question_fr + '</td>');
                    row.append('<td class="chinese d-none">' + survey.question_zh + '</td>');
                    row.append('<td><a href="#" class="btn btn-primary btn-circle editsid" id="' + survey.id + '"><i class="fas fa-pen"></i></a></td>');
                    row.append('<td><a href="#" class="btn btn-danger btn-circle delsid" id="' + survey.id + '"><i class="fas fa-trash"></i></a></td>');

        tbody.append(row);
    });
            
        }
        else {
            //console.log('Survey Re;load No data or incorrect data structure in response.');
         
           
        }
        },
        error: function(xhr, status, error) {
            // Function to be executed if the request fails
            //console.log('Error:', xhr.responseText);
            //console.log('Status:', status);
            //console.log('Error:', error);
        }
    });
   

}

//Export to Excel
$('#exptExcel').on('click', function () {
    var s = $('#startDate').val();
    var e = $('#endDate').val();
    if (s == "" && e == "") {
        s = "01-02-2023";
        e = new Date();
    }
    var total = $("#total_usage").text();
    // var Take_me = $("#Take_me").text();
    var Survey = $("#survey_card_text").text();
    var Ask_Me = $("#askme_card_text").text();
    var Support = $("#support_card_text").text();
    var Procedure = $("#procedure_card_text").text();
    var Suggestion = $("#suggestion_card_text").text();

    var satisFied = $('.satis_data').attr('id');

    // var unsatisFied =$('.unsatis_data').attr('id');

    // var qrdata = $('.qrdata').attr('id');

    var inputdata = $('.inputdata').attr('id');

    var arabic_data = $('.arabic_data').attr('id');
 

    var english_data =  $('.english_data').attr('id');
 
    
  

    
    var data = [
        ['Start Date', s, '', '', 'End Date', e],
        ['', ''],
        ['Sr No.', 'Services', 'Usage'],
        [1, 'Survey', Survey],
        [2, 'Ask Me', Ask_Me],
        [3, 'Support', Support],
        [4, 'Suggestions', Suggestion],
        [5, 'Procedure', Procedure],
        ['', ''],
        ['', 'Total', total],
        ['', ''],
        ['', ''],
        [5, 'Survey'],
        ['a', 'Satisfied', '%'+satisfiedVar.toFixed(2)],
        ['b', 'Un-Satisfied', '%'+unsatisfiedVar.toFixed(2)],
        ['c', 'Acceptable', '%'+acceptableVarVar.toFixed(2)]
        // ['', ''],
        // ['', ''],
        // [6, 'Flight Information'],
        // ['a', 'QR', '%'+qrVar.toFixed(2)],
        // ['b', 'Input', '%'+inputVar.toFixed(2)],
        // ['', ''],
        // ['', ''],
        // ['', 'Language'],
        // ['a', 'Arabic', '%'+arabic_dataVar.toFixed(2)],
        // ['b', 'English', '%'+english_dataVar.toFixed(2)],
    ];
   

    // Create a new workbook
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Generate the XLSX file
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }

    // Trigger the file download
    var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'JawazatReport.xlsx'; // Change the filename as needed
    link.click();

});
$('#reset').on('click', function () {

        
    location.reload();
 });



 
});