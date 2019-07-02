(function(src) {
  var script = document.createElement('script');
  script.src = src + '?t=' + Date.now();
  script.async = true;
  var entry = document.getElementsByTagName('script')[0];
  entry.parentNode.insertBefore(script, entry);
})('https://st-www.gmo.media/js/isbn/index.js');
