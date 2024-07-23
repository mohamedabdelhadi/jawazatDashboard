// Call the dataTables jQuery plugin

$(document).ready(function() {
  $('#dataTable').DataTable({
    "ordering": false,
    // searching: false
    // paging: false
    language: {
      processing: "جارٍ التحميل...",
      search: "بحث:",
      lengthMenu: "أظهر _MENU_ نتائج",
      info: "عرض _START_ إلى _END_ من _TOTAL_ نتائج",
      infoEmpty: "عرض 0 إلى 0 من 0 نتيجة",
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
  $('#dataTablea').DataTable({
    "ordering": false,
     language: {
      processing: "جارٍ التحميل...",
      search: "بحث:",
      lengthMenu: "أظهر _MENU_ نتائج",
      info: "عرض _START_ إلى _END_ من _TOTAL_ نتائج",
      infoEmpty: "عرض 0 إلى 0 من 0 نتيجة",
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
});
