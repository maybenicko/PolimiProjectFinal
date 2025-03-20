document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("dynamic-image");
    const totalImages = 59; // Images range from 0.png to 58.png
  
    function getRandomImage() {
      const randomIndex = Math.floor(Math.random() * totalImages);
      return `static/images/${randomIndex}.png`;
    }
  
    function changeImage() {
      imageElement.style.opacity = 0; // Fade out
  
      setTimeout(() => {
        imageElement.src = getRandomImage();
        imageElement.style.opacity = 1; // Fade in
      }, 1000); // Transition timing (matches CSS)
    }
  
    // Change image every 2.5 seconds
    setInterval(changeImage, 5000);
  });
