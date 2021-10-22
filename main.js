var mouseEvent="";
var canvas= document.getElementById("my_canvas");
var ctx= canvas.getContext("2d");
var color= "pink";
var width= 5;
var radius= 30;

canvas.addEventListener("mousedown",mousedownF);

function mousedownF() {
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",mouseupF);

function mouseupF() {
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",mouseleaveF);

function mouseleaveF() {
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",mousemoveF);

function mousemoveF(ed) {
    currentX= ed.clientX-canvas.offsetLeft;
    currentY= ed.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentX, currentY, radius, 0, 360);
        ctx.stroke();
    }
}