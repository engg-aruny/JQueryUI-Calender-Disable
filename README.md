# JQueryUI-Calender-Disable
Disable 2nd Saturday, 4th Saturday, public holidays and sundays

Jquery Calendar plugin provide you a option "beforeShowDay", you can find more information on DataPickerUI

To Disable 2nd Saturday & 4th Saturday, you need to first calculate the sat or Sunday of specific month then disable those dates, like we did for others calendars

sample code calculate sat & sunday https://www.hscripts.com/scripts/JavaScript/second-fourth.php

Created plunker for you, https://plnkr.co/edit/inBYY748BptaCd7Ulwwg?p=preview

   //To disable Sundays you need to find out the Day of current date.
            $(function () {
                var publicHolidays = [
                  [11, 28, 2015],
                  [11, 30, 2015]
                ];

                $("#datepicker").datepicker({
                    beforeShowDay: function (date) {
                        var day = date.getDay();
                        return [(day !== 0), ''];
                    }
                });

                //To disable public holidays create an array with you holiday list then
                //return false when you browse calender.

                $("#datepicker2").datepicker({
                    beforeShowDay: function (date) {
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
