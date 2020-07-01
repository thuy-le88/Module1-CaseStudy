var bar = {
    height: bar_height,
    width: bar_width,
    x: bar_x,
    y: bar_y,
    speed: bar_speed,
    isMovingLeft: false,
    isMovingRight: false,
};
function drawBar() {
    context.beginPath();
    context.rect(bar.x,bar.y,bar.width,bar.height);
    context.stroke();
    context.fillStyle="black";
    context.fill();
    context.closePath();
}

document.addEventListener('keyup',function (event) {
    if (event.keyCode==37) {
        bar.isMovingLeft=false;
    } else if (event.keyCode==39) {
        bar.isMovingRight=false;
    }
});

document.addEventListener('keydown',function (event) {
    if (event.keyCode==37) {
        bar.isMovingLeft=true;
    } else if (event.keyCode==39) {
        bar.isMovingRight=true;
    }

});
function touchBarCanvas() {
    if (bar.isMovingLeft) {
        bar.x-=bar.speed;
    } else if (bar.isMovingRight) {
        bar.x+=bar.speed;
    }
}
function updateBar () {
    if (bar.x<0) {
        bar.x=0
    } else if (bar.x>canvas.width-bar.width) {
        bar.x=canvas.width-bar.width;
    }
}