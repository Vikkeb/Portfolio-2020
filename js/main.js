jQuery(document).ready(function($) {

$('.ericsson_btn').modaal();
$('.lifesymb_btn').modaal();
$('.leovegas_btn').modaal();
$('.nallebudet_btn').modaal();


});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
