var start = $('#start_btn');
var infoBox = $('.info-box');

start.click(function () {
   infoBox.addClass('active');
   var falseBtn = $('.false');
   // var trueBtn = $('.true');

   falseBtn.click(function () {
      infoBox.removeClass('active');
   });
});

