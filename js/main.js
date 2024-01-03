jQuery(document).ready(function($) {
  // Get the dialog container HTML element (with the accessor method you want)
  const element = document.getElementById('goconnect');

  // Function to initialize OverlayScrollbars and A11yDialog
  function initializeScrollbarsAndDialog() {
    // Initialize OverlayScrollbars on the element after the document is ready
    const osInstance = new OverlayScrollbars('body');

    // Instantiate a new A11yDialog module
    const dialog = new A11yDialog(element);
  }

  // Check if OverlayScrollbars script is already loaded
  if (typeof OverlayScrollbars === 'undefined') {
    // If not loaded, wait for the script to load
    document.querySelector('script[src*="overlayscrollbars"]').addEventListener('load', initializeScrollbarsAndDialog);
  } else {
    // If already loaded, initialize immediately
    initializeScrollbarsAndDialog();
  }
});