// Add your javascript here
$(function() {
  var publicHolidays = [
    [11, 28, 2015],
    [11, 30, 2015]
  ];

  $("#datepicker").datepicker({
    beforeShowDay: function(date) {
      var day = date.getDay();
      return [(day !== 0), ''];
    }
  });

  $("#datepicker2").datepicker({
    beforeShowDay: function(date) {
      for (i = 0; i < publicHolidays.length; i++) {
        if (date.getMonth() == publicHolidays[i][0] &&
          date.getDate() == publicHolidays[i][1] &&
          date.getFullYear() == publicHolidays[i][2]) {
          return [false];
        }
      }
      return [true];
    }
  });
});