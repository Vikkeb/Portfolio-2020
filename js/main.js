jQuery(document).ready(function($) {
  const element = document.getElementById('goconnect');

  function initializeScrollbarsAndDialog() {
    console.log('Initializing OverlayScrollbars and A11yDialog');

    const osInstance = new OverlayScrollbars('body');
    const dialog = new A11yDialog(element);
  }

  console.log('Checking OverlayScrollbars script...');
  
  if (typeof OverlayScrollbars === 'undefined') {
    document.querySelector('script[src*="overlayscrollbars"]').addEventListener('load', initializeScrollbarsAndDialog);
  } else {
    initializeScrollbarsAndDialog();
  }
});

