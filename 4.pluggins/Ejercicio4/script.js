$(document).ready(function() {
  var slider = $(".carrusel");
  var images = slider.find("img");
  var currentIndex = 0;
  
  function showImage() {
    images.hide();
    images.eq(currentIndex).show();
  }
  
  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage();
  }
  
  setInterval(nextImage, 2000);
});