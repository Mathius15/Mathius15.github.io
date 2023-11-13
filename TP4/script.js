document.addEventListener("DOMContentLoaded", function() {
    var parallaxLayers = document.querySelectorAll('.parallax-layer');
  
    if (parallaxLayers.length > 0) {
      window.addEventListener('scroll', function() {
        parallaxLayers.forEach(function(layer) {
          var speed = parseFloat(layer.getAttribute('data-speed'));
          var yPos = -(window.scrollY * speed / 100);
          layer.style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
        });
      });
    }
  });
  