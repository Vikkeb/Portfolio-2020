jQuery(document).ready(function($) {
  const element = document.getElementById('goconnect');

  console.log('Checking OverlayScrollbars script...');

  if (typeof OverlayScrollbars === 'undefined') {
    console.log('OverlayScrollbars is not loaded yet');
    document.querySelector('script[src*="overlayscrollbars"]').addEventListener('load', function() {
      console.log('OverlayScrollbars script has loaded');
      const osInstance = new OverlayScrollbars('body');
      const dialog = new A11yDialog(element);
    });
  } else {
    console.log('OverlayScrollbars is already loaded');
    const osInstance = new OverlayScrollbars('body');
    const dialog = new A11yDialog(element);
  }
});


