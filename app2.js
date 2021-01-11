let mouseCursor = document.querySelector(".cursor");
let picCursor = document.querySelectorAll('.my-picture2');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}



picCursor.forEach(pic => {
    pic.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("pic-grow");
    });
    pic.addEventListener('mouseover', () => {
        mouseCursor.classList.add("pic-grow");
    });
});