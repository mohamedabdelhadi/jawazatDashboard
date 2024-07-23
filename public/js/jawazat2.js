$(document).ready(function() {

            
    var baseUrl = "http://192.168.200.74";
    var apikey = "@J2w1_z!@T?zz";

    //enable and disable services

  
    
    // add survey question
    $('#save_survey').on('click', function() {
        // Get the value from the Arabic input field
       
        var arabic = $('#addarabic').val();

        // Check if the Arabic input field is empty
        if (arabic.trim() === '') {
            // Display an error message if the Arabic input is empty
            $('#survey_err_panel').text("Alert: You Must add Arabic data!")
            
            // Stop further execution of the function (don't save the data)
            return;
        }
        $('#err_panel').text("");
        // Get the values from the other input fields
        var english = $('#addenglish').val();
        var french = $('#addfrench').val();
        var chines = $('#addchines').val();

        // Create a JSON object with the values
        var surveyData = {
            artxt: arabic.trim(),
            entxt: english.trim(),
            frtxt: french.trim(),
            chtxt: chines.trim(),
            type:'survey'
        };

        // Convert the object to a JSON string
        var surveyDataJson = JSON.stringify(surveyData);
        $('#survey_err_panel').text("")
        // Log the JSON string to the console
        console.log(surveyDataJson);
        $("#loaderrow").removeClass("d-none");
        $.ajax({
            url: `${baseUrl}/add`, // Replace with your API endpoint URL
            method: 'POST',
            contentType: 'application/json', // Specify the content type as JSON
            data: surveyDataJson, // Send the JSON string in the request body
            success: function(response) {
               
                survey_reload();
                $("#loaderrow").addClass("d-none");
                $('#addModal').on('hidden.bs.modal', function () {
                    $('.modal-backdrop').remove();
                });
                $('#addModal').modal('hide');
                alertmsg('Success','!Successfully Add New Question'); 
                console.log('Successfully Add New Question:', response);
                $('#addarabic').val("")
                $('#addenglish').val("");
                $('#addfrench').val("");
                $('#addchines').val("");
            },
            error: function(xhr, status, error) {
                $("#loaderrow").addClass("d-none");
                alertmsg('Failed','!Fail To Add New Question'); 
                console.error('Error submitting Ask Me data:', error);
              
            }
        });
    });
  
    // del survey question
    $(document).on('click','.delsid', function(e) {
        e.preventDefault();
        
        // Get the ID from the clicked element
        var id = $(this).attr('id');

        // Confirm the deletion with the user
        var confirmed = confirm("هل انت متأكد انك تريد حذف هذا السؤال ؟");
        // var confirmed = confirm("Are you sure you want to delete this Question?");

        if (confirmed) {
            // Create a JSON object with the ID and type
            var deleteData = {
                
            };
         
            type= 'survey';
            // Convert the object to a JSON string
            var deleteDataJson = JSON.stringify(deleteData);
            $("#loaderrow").removeClass("d-none");
            // Send the JSON data to the API endpoint using POST method
            $.ajax({
                url: `${baseUrl}/delete?id=${id}&type=${type}`, // Replace with your Node.js API URL
                method: 'DELETE',
                
                // data: dataJson,
                success: function(response) {
                    // Display the result from the API on the page
                    
                    console.log(response)
                    $("#loaderrow").addClass("d-none");
                 
                    survey_reload();
                    alertmsg('Success','!Successfully Delete the Question');    
                    // document.getElementById('result').innerText = 'API Response: ' + JSON.stringify(response);
                },
                error: function(xhr, status, error) {
                    // Display an error message on the page
                    $("#loaderrow").addClass("d-none");
                    alertmsg('Failed','!Error To Delete the Question'); 
                    document.getElementById('result').innerText = 'Error: ' + error;
                }
            });
        }
    });
    //edit survey

    //reload survey data
    function survey_reload(){
        $.ajax({
            url: 'survey_reload',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                if (response && Object.keys(response).length > 0) {
                    console.log('Survey Reload:', response);
                    
                    // Check if the DataTable is already initialized and destroy it if it is
                    if ($.fn.DataTable.isDataTable('#dataTablea')) {
                        $('#dataTablea').DataTable().clear().destroy();
                    }
    
                    // Clear existing rows
                    $('#dataTablea tbody').empty();
                    
                    $.each(response, function(index, survey) {
                        var row = '<tr  class="text-right">' +
                            '<td>' + (index + 1) + '</td>' +
                            '<td class="arabic">' + survey.question_ar + '</td>' +
                            '<td><a href="#" class="btn btn-warning btn-circle squstid" id="' + survey.id + '"> <i class="fas fa-line-chart">A</i></a></td>' +
                            '<td class="english d-none">' + survey.question + '</td>' +
                            '<td class="french d-none">' + survey.question_fr + '</td>' +
                            '<td class="chines d-none">' + survey.question_zh + '</td>' +
                            '<td><a href="#" class="btn btn-primary btn-circle editsid" id="' + survey.id + '"><i class="fas fa-pen"></i></a></td>' +
                            '<td><a href="#" class="btn btn-danger btn-circle delsid" id="' + survey.id + '"><i class="fas fa-trash"></i></a></td>' +
                        '</tr>';
    
                        $('#dataTablea tbody').append(row);
                    });
    
                    // Initialize the DataTable again
                    resetSurveyTable('#dataTablea');
                } else {
                    if ($.fn.DataTable.isDataTable('#dataTablea')) {
                        $('#dataTablea').DataTable().clear().destroy();
                    }
                    $('#dataTablea tbody').empty();

                      resetSurveyTable('#dataTablea');
                    console.log('Survey Reload: No data or incorrect data structure in response.');
                }
            },
            error: function(xhr, status, error) {
                console.log('Error:', xhr.responseText);
                console.log('Status:', status);
                console.log('Error:', error);
            }
        });
    }

    function resetSurveyTable(tablename){
        $(tablename).DataTable({
            "ordering": false,
             language: {
              processing: "جارٍ التحميل...",
              search: "بحث:",
              lengthMenu: "أظهر _MENU_ إدخالات",
              info: "عرض _START_ إلى _END_ من _TOTAL_ إدخالات",
              infoEmpty: "عرض 0 إلى 0 من 0 إدخالات",
              infoFiltered: "(منتقاة من _MAX_ إجمالي الإدخالات)",
              loadingRecords: "جارٍ التحميل...",
              zeroRecords: "لم يتم العثور على سجلات مطابقة",
              emptyTable: "لا توجد بيانات متاحة في الجدول",
              paginate: {
                  first: "الأولى",
                  previous: "السابق",
                  next: "التالي",
                  last: "الأخيرة"
              },
              aria: {
                  sortAscending: ": تفعيل لفرز العمود تصاعديًا",
                  sortDescending: ": تفعيل لفرز العمود تنازليًا"
              }
          },
          initComplete: function() {
            // Find the search bar element and add a class
            var searchBar = $(this.api().table().container()).find('div.dataTables_filter');
            searchBar.addClass('text-left');
        
            // Find the length menu element and add a class
            var lengthMenu = $(this.api().table().container()).find('div.dataTables_length');
            lengthMenu.addClass('text-right');
        
            // Find the info display element and add a class
            var dataTablea_info = $(this.api().table().container()).find('div.dataTables_info');
            dataTablea_info.addClass('text-right');
            }
        
          });
    }
    
    // function survey_reload(){
    //     $.ajax({
    //         url: 'survey_reload', // URL to send the request
    //         type: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
    //         dataType: 'json', // The expected data type of the response
    //         success: function(response) {
    //             // Function to be executed if the request succeeds
    //             if (response && Object.keys(response).length > 0) {
    //                 console.log('Survey Reload:', response);
    //                 $('#dataTablea').DataTable({

    //                   });
    //                  // Clear existing rows
    //                 $('#dataTablea tbody').empty();
    //                 $.each(response, function(index, survey) {
    //                     var row = '<tr>'+
    //                     '<td>' + (index + 1) + '</td>'+
    //                     '<td class="arabic">' + survey.question_ar + '</td>'+
    //                     '<td><a href="#" class="btn btn-warning btn-circle squstid" id="' + survey.id + '"> <i class="fas fa-line-chart">A</i></a></td>'+
    //                     '<td class="english d-none">' + survey.question + '</td>'+
    //                     '<td class="french d-none">' + survey.question_fr + '</td>'+
    //                     '<td class="chines d-none">' + survey.question_zh + '</td>'+
    //                     '<td><a href="#" class="btn btn-primary btn-circle editsid" id="' + survey.id + '"><i class="fas fa-pen"></i></a></td>'+
    //                     '<td><a href="#" class="btn btn-danger btn-circle delsid" id="' + survey.id + '"><i class="fas fa-trash"></i></a></td>'+
    //                     '</tr>';
    
    //             $('#dataTablea tbody').append(row);
    //     });
                
    //         }
    //         else {
    //             console.log('Survey Reload No data or incorrect data structure in response.');
             
               
    //         }
    //         },
    //         error: function(xhr, status, error) {
    //             // Function to be executed if the request fails
    //             console.log('Error:', xhr.responseText);
    //             console.log('Status:', status);
    //             console.log('Error:', error);
    //         }
    //     });
    //    
    
    // }


    $(document).on('click','.squstid', function(e) {
        e.preventDefault();
        // 
        var id = $(this).attr('id'); 
        var row = $(this).closest('tr');
        var arabicText = row.find('.arabic').text().trim();
        var truncatedText;

        if (arabicText.length > 60) {
            truncatedText =  "..."+arabicText.substring(0, 60) ;
        } else {
            truncatedText = arabicText;
        }
        
        $("#qusetLabel").text(truncatedText);

        $.ajax({
            url: 'get_question_stats',
            method: 'GET',
            data: {
                quest_id: id
            },
            success: function(response) {
                console.log('Response:', response);
                // Initialize the result object with all possible labels and default counts of zero
                var result = {
                    Acceptable: 0,
                    Satisfied: 0,
                    'Not satisfied': 0
                };

                // Process the response and update the result object
                response.forEach(function(item) {
                    // Update the count for the label in the result object
                    if (result.hasOwnProperty(item.label)) {
                        result[item.label] = item.count;
                    }
                });

                // Calculate the total count
                var totalCount = result.Acceptable + result.Satisfied + result['Not satisfied'];

                // Calculate the percentage for each category
                var acceptablePercentage = (result.Acceptable / totalCount) * 100;
                var satisfiedPercentage = (result.Satisfied / totalCount) * 100;
                var notSatisfiedPercentage = (result['Not satisfied'] / totalCount) * 100;

                // Update the text content of the elements in the modal with the calculated percentages
                $("#total_quest").text(totalCount );
                $("#squest_satisfied").text(result.Satisfied );
                $("#squest_acceptable").text(result.Acceptable );
                $("#squest_notsatisfied").text(result['Not satisfied'] );

                updatequestionChart(qusetionChart,[result.Acceptable,result['Not satisfied'],result.Satisfied])
                // Display the modal
                $("#chartModal").modal('show');

            },
            error: function(xhr, status, error) {
                console.error('Error in data retrieval:', error);
                // Handle errors here
            }
        });


       
       
    });
    $(document).on('click','.editsid', function(e) {
        
        e.preventDefault(); 

        var id = $(this).attr('id');
        var row = $(this).closest('tr');

        // Get text values from the respective columns
        var arabicText = row.find('.arabic').text().trim();;
        var englishText = row.find('.english').text().trim();;
        var frenchText = row.find('.french').text().trim();;
        var chinesText = row.find('.chines').text().trim();;

        // Set values in the modal inputs
        $('#editModal #editId').val(id);
        $('#editModal #edtarabic').val(arabicText);
        $('#editModal #edtenglish').val(englishText);
        $('#editModal #edtfrench').val(frenchText);
        $('#editModal #edtchines').val(chinesText);

        // Show the modal
        $('#editModal').modal('show');
    });


    //update survey queston
    $('#updatesurvey').on('click', function() {
        // Get the values from the input fields in the modal
        var id = $('#editId').val();
        var arabic = $('#edtarabic').val();
        var english = $('#edtenglish').val();
        var french = $('#edtfrench').val();
        var chinese = $('#edtchines').val();

        if (arabic.trim() === '') {
            // Display an error message if the Arabic input is empty
            $('#update_survey_err_panel').text("Alert: You Must add Arabic data!")
            
            // Stop further execution of the function (don't save the data)
            return;
        }

        // Create a JSON object
        var data = {
            id: id,
            artxt: arabic.trim(),
            entxt: english.trim(),
            frtxt: french.trim(),
            chtxt: chinese.trim(),
            type:'survey'
        };
        var dataJson = JSON.stringify(data)
        // Log the JSON object to the console
        console.log(JSON.stringify(data));
        $("#loaderrow").removeClass("d-none");
        $('#update_survey_err_panel').text("");
         // Send the JSON data to the API endpoint using POST or PUT method
         $.ajax({
            url: `${baseUrl}/update`,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Standard header for JSON content
                'apikey': `${apikey}`, // Replace with your actual API key
                  },
            data: dataJson, 
            success: function(response) {

                console.log(response)
                survey_reload();
                $('#editModal').modal('hide');
                $("#loaderrow").addClass("d-none");
                alertmsg('Success',response.message);           
              
            },
            error: function(xhr, status, error) {
                // Handle any errors from the server
                $("#loaderrow").addClass("d-none");
                alertmsg('Failed','!Error updating the Question'); 
                console.error('Error updating Ask Me item:', error);
                // You can display an error message to the user if needed
            }
        });
    });












    //add askme question
    $('#askme_add').on('click', function() {
       
         // Get the selected category from the dropdown
        var selectedCategory = $('#addaskmeModal #add_askme_category').val();
        

        var selectedOption = $('#addaskmeModal #add_askme_category option:selected');
       
        // Get the ID attribute of the selected option
        var selectedCategoryId = selectedOption.attr('id');
       
        // Check if a category has been selected
        if (!selectedCategory) {
            // Display an error message if no category has been selected
            $('#err_panel').text('الرجاء اختيار الفئة');
            return;
        }

        // Clear any previous error message
        $('#err_panel').text('');
        var arabicQuestion = $('#add_arb_qust').val();
        var arabicAnswer = $('#add_arb_anw').val();

        // Check if any Arabic input fields are empty
        if (arabicQuestion.trim() === '' || arabicAnswer.trim() === '') {
            // Display an error message if any Arabic input is empty
            // $('#err_panel').text('All fields are required: Arabic question, Arabic answer and ');
            $('#err_panel').text('هذه الحقول مطلوبة : السؤال العربي, الجواب العربي والصوت العربي.');
            // $('#err_panel').text('All fields are required: Arabic question, Arabic answer and ');
            return;
        }

        // Clear any previous error message
        $('#err_panel').text('');

        // Get values from the English input fields
        var englishQuestion = $('#add_eng_qust').val();
        var englishAnswer = $('#add_eng_anw').val();

        // Get values from the French input fields
        var frenchQuestion = $('#add_frn_qust').val();
        var frenchAnswer = $('#add_frn_anw2').val();

        // Get values from the Chinese input fields
        var chineseQuestion = $('#add_chn_qust').val();
        var chineseAnswer = $('#add_chn_anw').val();

        // Create a JSON object with the values
        var askMeData = {
                cat_id: selectedCategoryId,
                arqst: arabicQuestion,
                arans: arabicAnswer,
            
                enqst: englishQuestion,
                enans: englishAnswer,
            
                frqst: frenchQuestion,
                frans: frenchAnswer,
            
                chqst: chineseQuestion,
                chans: chineseAnswer,
                type:'ask_me'
           
        };

        // Convert the object to a JSON string
        var askMeDataJson = JSON.stringify(askMeData);
        $("#loaderrow").removeClass("d-none");
        // Log the JSON string to the console
        console.log(askMeDataJson);
        $.ajax({
            url: `${baseUrl}/add`, // Replace with your API endpoint URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Standard header for JSON content
                'apikey': `${apikey}`, // Replace with your actual API key
                  },
            data: askMeDataJson, // Send the JSON string in the request body
            success: function(response) {
               
                askme_reload();
                $("#loaderrow").addClass("d-none");
                $('#addaskmeModal').on('hidden.bs.modal', function () {
                    $('.modal-backdrop').remove();
                });
                $('#addaskmeModal').modal('hide');
                alertmsg('Success','!Successfully Add New Question'); 
                console.log('Successfully Add New Question:', response);

                $('#add_arb_qust').val("");
                $('#add_arb_anw').val("");

             
                $('#add_eng_qust').val("");
                $('#add_eng_anw').val("");

                // Get values from the French input fields
                $('#add_frn_qust').val("");
                $('#add_frn_anw2').val("");

                // Get values from the Chinese input fields
                $('#add_chn_qust').val("");
                $('#add_chn_anw').val("");
                $('#addaskmeModal #add_askme_category').val('');
            },
            error: function(xhr, status, error) {
                $("#loaderrow").addClass("d-none");
                alertmsg('Failed','!Fail To Add New Question'); 
                console.error('Error submitting Ask Me data:', error);
              
            }
        });
 
    });

    // del askme question

    $(document).on('click', '.del_askmeid', function(e) {
        e.preventDefault();
        
        // Get the ID of the item to be deleted
        var id = $(this).attr('id'); // Using data attribute to get the ID
        // alert(id)

        type="ask_me"
        // Confirm the deletion with the user
        var confirmed = confirm("هل انت متأكد انك تريد حذف هذا السؤال ؟");
        // var confirmed = confirm("Are you sure you want to delete this Question?");
        
        if (confirmed) {
            $("#loaderrow").removeClass("d-none");
            $.ajax({
                url: `${baseUrl}/delete?id=${id}&type=${type}`, // Replace with your Node.js API URL
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json', // Standard header for JSON content
                    'apikey': `${apikey}`, // Replace with your actual API key
                      },
                
                // data: dataJson,
                success: function(response) {
                    // Display the result from the API on the page
                    console.log(response)
                    $("#loaderrow").addClass("d-none");
                    askme_reload();
                    alertmsg('Success','!Successfully Delete the Question');    
                    // document.getElementById('result').innerText = 'API Response: ' + JSON.stringify(response);
                },
                error: function(xhr, status, error) {
                    // Display an error message on the page
                    $("#loaderrow").addClass("d-none");
                    alertmsg('Failed','!Error To Delete the Question'); 
                    document.getElementById('result').innerText = 'Error: ' + error;
                }
            });
            
        }
    });
    

    // edit ask me 
    $(document).on('click', '.edit_askmeid', function(e) {
        
        e.preventDefault(); 

        var id = $(this).attr('id');
        console.log('here id',id)
        $('#editaskmeModal #get_askme_id').val(id);
        var row = $(this).closest('tr');
        console.log('row',row)
        var arabicQust = row.find('.qust_arabic').text();
        var arabicAnw = row.find('.ans_arabic').text();
   
    //    alert(arabicAnw)
        var englishQust = row.find('.qust_english').text();
        var englishAnw = row.find('.ans_english').text();

        var frenchQust = row.find('.qust_french').text();
        var frenchAnw = row.find('.ans_french').text();

        var chinesQust = row.find('.qust_chines').text();
        var chinesAnw = row.find('.ans_chines').text();


        var cate_id = row.find('.cate_id').text();
        var selectElement = $('#edit_askme_category');
        selectElement.find('option').each(function() {
            if ($(this).val() === cate_id) {
                $(this).prop('selected', true);
                return false; // Breaks the loop since we found a match
            }
        });

        // Set the values in the modal inputs   
        $('#editaskmeModal #edit_arb_qust').val(arabicQust);
        $('#editaskmeModal #edit_arb_anw').val(arabicAnw);

        $('#editaskmeModal #edit_eng_qust').val(englishQust);
        $('#editaskmeModal #edit_eng_anw').val(englishAnw);

        $('#editaskmeModal #edit_frn_qust').val(frenchQust);
        $('#editaskmeModal #edit_frn_anw2').val(frenchAnw);

        $('#editaskmeModal #edit_chn_qust').val(chinesQust);
        $('#editaskmeModal #edit_chn_anw').val(chinesAnw);

        // Show the modal
        $('#editaskmeModal').modal('show');
    });
    //update the askme questions and answers
    $('#updateaskme').on('click', function() {
        // Get the values from the input fields in the modal
        
        var id = $('#editaskmeModal #get_askme_id').val();
        var arabicQust = $('#editaskmeModal #edit_arb_qust').val();
        var arabicAnw = $('#editaskmeModal #edit_arb_anw').val();
        var englishQust = $('#editaskmeModal #edit_eng_qust').val();
        var englishAnw = $('#editaskmeModal #edit_eng_anw').val();
        var frenchQust = $('#editaskmeModal #edit_frn_qust').val();
        var frenchAnw = $('#editaskmeModal #edit_frn_anw2').val();
        var chinesQust = $('#editaskmeModal #edit_chn_qust').val();
        var chinesAnw = $('#editaskmeModal #edit_chn_anw').val();
        
        // Get the selected option from the dropdown
        var selectedOption = $('#editaskmeModal #edit_askme_category option:selected');
       
        // Get the ID attribute of the selected option

        var selectedCategoryId = selectedOption.attr('id');


       

        // Check if Arabic question and answer are empty
        if (arabicQust.trim() === '' || arabicAnw.trim() === '') {
            $('#update_err_panel').text('Arabic question, answer are required.');
            return;
        }
    
        // Clear any previous error message
        $('#update_err_panel').text('');
    
        // Create a JSON object
        var data = {
            id: id,
            arqst: arabicQust,
            arans: arabicAnw,
            enqst: englishQust,
            enans: englishAnw,
            frqst: frenchQust,
            frans: frenchAnw,
            chqst: chinesQust,
            chans: chinesAnw,
            type: 'ask_me',
            cat_id: selectedCategoryId // Add the ID of the selected category to the JSON object
        };
        
        // Convert the data object to a JSON string
        var dataJson = JSON.stringify(data);
        $("#loaderrow").removeClass("d-none");
        // Send a PUT request to the API endpoint to update the ask_me item
        $.ajax({
            url: `${baseUrl}/update`,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Standard header for JSON content
                'apikey': `${apikey}`, // Replace with your actual API key
                  },
            data: dataJson, 
            success: function(response) {
                console.log(response)
                askme_reload();
                $('#editaskmeModal').modal('hide');
                $("#loaderrow").addClass("d-none");
                alertmsg('Success',response.message);           
              
            },
            error: function(xhr, status, error) {
                // Handle any errors from the server
                $("#loaderrow").addClass("d-none");
                alertmsg('Failed','!Error updating the Question'); 
                console.error('Error updating Ask Me item:', error);
                // You can display an error message to the user if needed
            }
        });
        
        // Log the JSON object to the console
        console.log(JSON.stringify(data));
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
    

    // get the current year for copyright
    var currentYear = new Date().getFullYear();      
    $(".currentYear").text(currentYear);
 
    
      $('#categorySelect').change(function(){
        
        var categoryId = $(this).val();
        if(categoryId === "الجميع"){
            askme_reload();
        }else{

        
        console.log("Selected Category ID: " + categoryId);
        
            // Send AJAX request
            $.ajax({
                url: '/get_askme_cat',
                method: 'GET',
                data: {
                    cat_id: categoryId
                },
                success: function(response) {
                    console.log(response);
                    $('#dataTable tbody').empty();
                    
                    // Populate table with response data
                    $.each(response, function(index, askme) {
                        var row = '<tr  class="text-right">' +
                            '<td>' + (index + 1) + '</td>' +
                            '<td class="qust_arabic">' + askme.question_ar + '</td>' +
                            '<td><span  class="ans_arabic">' + askme.answer_ar +'</span>'+
                                '<span class="qust_english d-none">' + askme.question + '</span>' +
                                '<span class="ans_english d-none">' + askme.answer + '</span>' +
                                '<span class="qust_french d-none">' + askme.question_fr + '</span>' +
                                '<span class="ans_french d-none">' + askme.answer_fr + '</span>' +
                                '<span class="qust_chines d-none">' + askme.question_zh + '</span>' +
                                '<span class="ans_chines d-none">' + askme.answer_zh + '</span>' +
                                '<span class="cate_id d-none">' + askme.category + '</span>' +
                            '</td>' +
                            '<td>' +
                                '<a href="#" class="btn btn-primary btn-circle edit_askmeid" id="' + askme.ask_me_id + '">' +
                                    '<i class="fas fa-pen"></i>' +
                                '</a>' +
                            '</td>' +
                            '<td>' +
                                '<a href="#" class="btn btn-danger btn-circle del_askmeid" id="' + askme.ask_me_id + '">' +
                                    '<i class="fas fa-trash"></i>' +
                                '</a>' +
                            '</td>' +
                            '</tr>';

                        $('#dataTable tbody').append(row);

                    });
                    // Process the response data here
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText);
                    // Handle errors here
                }
            });
        }
      });
    
    // askme reload function
    function askme_reload() {
        $.ajax({
            url: 'askme_reload', // URL to send the request
            type: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
            dataType: 'json', // The expected data type of the response
            success: function(response) {
                // Function to be executed if the request succeeds
                if (response && Object.keys(response).length > 0) {
                    console.log('Ask Me Reload Data:', response);
    
                    // Check if the DataTable is already initialized and destroy it if it is
                    if ($.fn.DataTable.isDataTable('#dataTable')) {
                        $('#dataTable').DataTable().clear().destroy();
                    }
    
                    // Clear existing rows
                    $('#dataTable tbody').empty();
                    
                    // Populate the table with response data
                    $.each(response, function(index, askme) {
                        var row = '<tr  class="text-right">' +
                            '<td>' + (index + 1) + '</td>' +
                            '<td class="qust_arabic">' + askme.question_ar + '</td>' +
                            '<td><span class="ans_arabic">' + askme.answer_ar + '</span>' +
                                '<span class="qust_english d-none">' + askme.question + '</span>' +
                                '<span class="ans_english d-none">' + askme.answer + '</span>' +
                                '<span class="qust_french d-none">' + askme.question_fr + '</span>' +
                                '<span class="ans_french d-none">' + askme.answer_fr + '</span>' +
                                '<span class="qust_chines d-none">' + askme.question_zh + '</span>' +
                                '<span class="ans_chines d-none">' + askme.answer_zh + '</span>' +
                                '<span class="cate_id d-none">' + askme.category + '</span>' +
                            '</td>' +
                            '<td>' +
                                '<a href="#" class="btn btn-primary btn-circle edit_askmeid" id="' + askme.id + '">' +
                                    '<i class="fas fa-pen"></i>' +
                                '</a>' +
                            '</td>' +
                            '<td>' +
                                '<a href="#" class="btn btn-danger btn-circle del_askmeid" id="' + askme.id + '">' +
                                    '<i class="fas fa-trash"></i>' +
                                '</a>' +
                            '</td>' +
                        '</tr>';
    
                        $('#dataTable tbody').append(row);
                    });
    
                    // Reinitialize the DataTable
                    resetSurveyTable('#dataTable');
                   
                } else {
                    if ($.fn.DataTable.isDataTable('#dataTable')) {
                        $('#dataTable').DataTable().clear().destroy();
                    }
                    $('#dataTable tbody').empty();
                    resetSurveyTable('#dataTable');
                    console.log('Ask Me Reload: No data or incorrect data structure in response.');
                }
            },
            error: function(xhr, status, error) {
                console.log('Error:', xhr.responseText);
                console.log('Status:', status);
                console.log('Error:', error);
            }
        });
    }
    
    //   function askme_reload(){
    //     $.ajax({
    //         url: 'askme_reload', // URL to send the request
    //         type: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
    //         dataType: 'json', // The expected data type of the response
    //         success: function(response) {
    //             // Function to be executed if the request succeeds
    //             if (response && Object.keys(response).length > 0) {
    //                 console.log('Ask Me Reload Data:', response);
    //                 $('#dataTable tbody').empty();
    //                 $('#dataTable').DataTable({
    //                     // searching: false
    //                     // paging: false
    //                   });
    //             // Populate table with response data
    //             $.each(response, function(index, askme) {
    //                 var row = '<tr>' +
    //                     '<td>' + (index + 1) + '</td>' +
    //                     '<td class="qust_arabic">' + askme.question_ar + '</td>' +
    //                     '<td><span  class="ans_arabic">' + askme.answer_ar +'</span>'+
    //                         '<span class="qust_english d-none">' + askme.question + '</span>' +
    //                         '<span class="ans_english d-none">' + askme.answer + '</span>' +
    //                         '<span class="qust_french d-none">' + askme.question_fr + '</span>' +
    //                         '<span class="ans_french d-none">' + askme.answer_fr + '</span>' +
    //                         '<span class="qust_chines d-none">' + askme.question_zh + '</span>' +
    //                         '<span class="ans_chines d-none">' + askme.answer_zh + '</span>' +
    //                         '<span class="cate_id d-none">' + askme.category + '</span>' +
    //                     '</td>' +
    //                     '<td>' +
    //                         '<a href="#" class="btn btn-primary btn-circle edit_askmeid" id="' + askme.id + '">' +
    //                             '<i class="fas fa-pen"></i>' +
    //                         '</a>' +
    //                     '</td>' +
    //                     '<td>' +
    //                         '<a href="#" class="btn btn-danger btn-circle del_askmeid" id="' + askme.id + '">' +
    //                             '<i class="fas fa-trash"></i>' +
    //                         '</a>' +
    //                     '</td>' +
    //                     '</tr>';

    //                 $('#dataTable tbody').append(row);

    //             });
    //         }
    //         else {
    //             console.log('Joined Ask Me No data or incorrect data structure in response.');
             
               
    //         }
    //         },
    //         error: function(xhr, status, error) {
    //             // Function to be executed if the request fails
    //             console.log('Error:', xhr.responseText);
    //             console.log('Status:', status);
    //             console.log('Error:', error);
    //         }
    //     });
    //    
    
    // }


    
      $('#search-input').on('input', function() {
        // Get the search query
        var query = $(this).val().toLowerCase();

        // Filter the rows in the table
        $('#dataTable tbody tr').each(function() {
            var row = $(this);
            // Get the text content of the row and convert it to lowercase
            var rowText = row.text().toLowerCase();
            
            // Check if the row text contains the search query
            if (rowText.indexOf(query) > -1) {
                // If the row contains the query, show the row
                row.show();
            } else {
                // If the row does not contain the query, hide the row
                row.hide();
            }
        });
    });
    
    function updatequestionChart(chart, newData) {

        chart.data.datasets[0].data = newData;
        chart.update();
    }
    var qsValues = ["Acceptable", "Not-Satisfied", "Satisfied"];
    var qsValues = [20,30,50]; // Update with your numerical values
    var qsbarColors = [
        "#F6C23E",
        "#E74A3B",
        "#1CC88A"
    ];
    var qsHoverColors = [
        "#F6C23E",
        "#E74A3B",
        "#1CC88A"
    ];
    var ctx = document.getElementById("qusetionChart");
    var qusetionChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: xsValues,
        datasets: [{
          data: qsValues,
          backgroundColor: qsbarColors,
          hoverBackgroundColor: qsHoverColors,
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
    
    
});