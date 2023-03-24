jQuery(document).ready(function($) {
  // Initialize modaal for all buttons with a single line
  $('.scania_btn, .ericsson_btn, .lifesymb_btn, .leovegas_btn, .nallebudet_btn, .solarsupply_btn, .golf_btn').modaal();

  const btn = $('#button');

  $(window).scroll(function() {
    // Toggle 'show' class based on the scroll position
    btn.toggleClass('show', $(window).scrollTop() > 300);
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
  });

  // Initialize OverlayScrollbars for the body element
  OverlayScrollbars(document.querySelector("body"), {});
});