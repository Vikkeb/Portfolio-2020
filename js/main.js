jQuery(document).ready(function($) {

  // Get the dialog container HTML element (with the accessor method you want)
  const element = document.getElementById('goconnect');

    // Get the body element
    const body = document.body;
  
    // Initialize OverlayScrollbars on the body element
    const osInstance = new OverlayScrollbars(body, {});  

  // Instantiate a new A11yDialog module
  const dialog = new A11yDialog(element);
});