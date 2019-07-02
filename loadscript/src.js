(function(script, src) {
  script.src = src + '?t=' + Date.now();
  script.async = true;
  document.body.insertAdjacentElement('beforeend', script);
})(
  document.createElement('script'),
  'https://www.gmo.media/js/isbn/index.js'
);
