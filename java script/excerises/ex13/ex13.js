let cnv = document.getElementById("canvas");
let line = cnv.getContext("2d");
line.canvas.width = window.innerWidth;
line.canvas.height = window.innerHeight;
let lastx
let lasty
let first = true
function lining(e) {
    if (first) {
        lastx = e.x
        lasty = e.y
        first = false
    } else {
        line.beginPath();
        line.moveTo(lastx, lasty);
        line.lineTo(e.x, e.y);
        lastx = e.x
        lasty = e.y
        line.stroke();
    }
}

document.body.addEventListener("click", lining)