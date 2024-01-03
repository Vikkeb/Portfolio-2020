jQuery(document).ready(function($) {
  // Initialize modaal for all buttons with a single line
  $('.seropian_btn, .goconnect_btn, .scania_btn, .ericsson_btn, .lifesymb_btn, .leovegas_btn, .nallebudet_btn, .solarsupply_btn, .golf_btn').modaal();

  const btn = $('#button');

  $(window).scroll(function() {
    // Toggle 'show' class based on the scroll position
    btn.toggleClass('show', $(window).scrollTop() > 300);
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
  });

  // simple initialization with an element
  const osInstance = OverlayScrollbars(document.querySelector('body'), {});

    // Get the dialog container HTML element (with the accessor method you want)
  const element = document.getElementById('goconnect')

  // Instantiate a new A11yDialog module
  const dialog = new A11yDialog(element)

});