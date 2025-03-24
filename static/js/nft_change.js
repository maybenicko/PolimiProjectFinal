document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("dynamic-image");
    const totalImages = 58;

    function getRandomImage() {
      const randomIndex = Math.floor(Math.random() * totalImages) + 1;
      return `static/images/${randomIndex}.png`;
    }

    function changeImage() {
      imageElement.style.opacity = 0;

      setTimeout(() => {
        imageElement.src = getRandomImage();
        imageElement.style.opacity = 1;
      }, 1000);
    }

    setInterval(changeImage, 5000);
  });