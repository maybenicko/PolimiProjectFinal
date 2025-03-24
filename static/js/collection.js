document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('image-gallery');
    const imageNumbers = Array.from({ length: 58 }, (_, i) => i + 1);

    for (let i = imageNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imageNumbers[i], imageNumbers[j]] = [imageNumbers[j], imageNumbers[i]];
    }

    imageNumbers.forEach(num => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');

        const img = document.createElement('img');
        img.src = `static/images/${num}.png`;
        img.alt = `Image ${num}`;

        imgContainer.appendChild(img);
        gallery.appendChild(imgContainer);
    });
});


function goToPrevious() {
    window.location.href = "index.html";
}

function goToNext() {
    window.location.href = "coins.html";
}
