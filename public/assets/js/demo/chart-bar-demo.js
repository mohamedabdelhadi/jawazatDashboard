// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// function number_format(number, decimals, dec_point, thousands_sep) {
//   // *     example: number_format(1234.56, 2, ',', ' ');
//   // *     return: '1 234,56'
//   number = (number + '').replace(',', '').replace(' ', '');
//   var n = !isFinite(+number) ? 0 : +number,
//     prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
//     sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
//     dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
//     s = '',
//     toFixedFix = function(n, prec) {
//       var k = Math.pow(10, prec);
//       return '' + Math.round(n * k) / k;
//     };
//   // Fix for IE parseFloat(0.55).toFixed(0) = 0;
//   s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
//   if (s[0].length > 3) {
//     s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
//   }
//   if ((s[1] || '').length < prec) {
//     s[1] = s[1] || '';
//     s[1] += new Array(prec - s[1].length + 1).join('0');
//   }
//   return s.join(dec);
// }










var xlValues = ["Take Me","Flight Info","Support","Guide","WIFI","Survey"];
var ylValues = [338, 563, 195, 145, 632, 375]; // Update with your numerical values
var lbarColors = [
    "#502c84",
    "#ef4129",
    "#2574bb",
    '#f26122',
    '#06a7e0',
'#C05120'
];


var WisoUsageChart = new Chart("myBarChart", {
    type: "bar",
    data: {
        labels: xlValues,
        datasets: [{
            backgroundColor: lbarColors,
            data: ylValues,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 0, // Remove the border lines behind the bars
            datalabels: {
                display: false, // Set display to false to hide labels on bars
            }
        }]
    },
    options: {
      maintainAspectRatio: false,
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
                    display: true // Remove x-axis grid lines
                },
                ticks: {
                    color: '#04615C' // Change x-axis label color
                }
            },
            y: {
                grid: {
                    display: true // Remove y-axis grid lines
                },
                ticks: {
                    color: '#04615C' // Change y-axis label color
                }
            }
        }
    }
});
// wiso chart usage end
// Bar Chart Example
// var ctx = document.getElementById("myBarChart");
// var myBarChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ["Ask-Me", "Suggestion", "Survey", "Procedure", "Support"],
//     datasets: [{
//       label: "Revenue",
//       backgroundColor: "#4e73df",
//       hoverBackgroundColor: "#2e59d9",
//       borderColor: "#4e73df",
//       data: [4215, 5312, 6251, 7841, 9821],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'month'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 6
//         },
//         maxBarThickness: 25,
//       }],
//       yAxes: [{
//         ticks: {
//           min: 0,
//           max: 15000,
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return  number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: false
//     },
//     tooltips: {
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
//         }
//       }
//     },
//   }
// });
