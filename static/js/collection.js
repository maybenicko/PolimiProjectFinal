document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('image-gallery');

    for (let i = 0; i < 59; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');

        const img = document.createElement('img');
        img.src = `static/images/${i}.png`;  // Path to your images
        img.alt = `Image ${i}`;

        imgContainer.appendChild(img);
        gallery.appendChild(imgContainer);
    }
});