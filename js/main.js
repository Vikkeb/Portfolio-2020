jQuery(document).ready(function($) {

  // simple initialization with an element
  const osInstance = OverlayScrollbars(document.querySelector('body'), {});

  // Get the dialog container HTML element (with the accessor method you want)
  const element = document.getElementById('goconnect')

  // Instantiate a new A11yDialog module
  const dialog = new A11yDialog(element)

});