document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('image-gallery');

    for (let i = 0; i < 59; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');

        const img = document.createElement('img');
        img.src = `static/images/${i}.png`;
        img.alt = `Image ${i}`;

        imgContainer.appendChild(img);
        gallery.appendChild(imgContainer);
    }
});

function goToPrevious() {
    window.location.href = "index.html";
}

function goToNext() {
    window.location.href = "coins.html";
}
