$(document).ready(function() {

  const element = document.getElementById('goconnect');

  // Initialize OverlayScrollbars
  const osInstance = new OverlayScrollbars(document.querySelector('body'), {
    
    className : "os-theme-dark"
  
  });
  
  // Initialize A11yDialog
  const dialog = new A11yDialog(element);
  
});