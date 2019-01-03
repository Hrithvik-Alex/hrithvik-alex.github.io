function ScrollTo(name) {
    ScrollToResolver(document.getElementById(name));
  }
  
  function ScrollToResolver(elem) {
    var jump = parseInt(elem.getBoundingClientRect().top * .5);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;
    if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
      elem.lastjump = Math.abs(jump);
      setTimeout(function() { ScrollToResolver(elem);}, "40");
    } else {
      elem.lastjump = null;
    }
  }