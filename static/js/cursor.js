document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.createElement("div");
    cursor.classList.add("cursor");

    var dot = document.createElement("div");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function(e) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });
});