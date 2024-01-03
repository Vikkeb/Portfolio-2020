jQuery(document).ready(function($) {

  // Get the dialog container HTML element (with the accessor method you want)
  const element = document.getElementById('goconnect');

  // Initialize OverlayScrollbars on the element after the document is ready
  const osInstance = new OverlayScrollbars('body');

  // Instantiate a new A11yDialog module
  const dialog = new A11yDialog(element);
});