$(document).ready(function() {

  const element = document.getElementById('goconnect');

  // Initialize OverlayScrollbars
  const osInstance = new OverlayScrollbars(document.querySelector('body'), {});
  
  // Initialize A11yDialog
  const dialog = new A11yDialog(element);
  
});