var ball = {
    x: ball_x,
    y: ball_y,
    speedX: ball_speedX,
    speedY: ball_speedY,
    radius: ball_radius
}

function drawBall() {
    context.beginPath();
    context.arc(ball.x,ball.y,ball.radius,0,2*Math.PI);
    context.stroke();
    context.fillStyle="blue";
    context.fill();
    context.closePath();
};
function changeDirectionBall() {
    const isBallTouchCanvasX=ball.x<=ball.radius || ball.x>=canvas.width-ball.radius;
    const isBallTouchCanvasY=ball.y<=ball.radius;
    if (isBallTouchCanvasX)
        ball.speedX=-ball.speedX
    if (isBallTouchCanvasY)
        ball.speedY=-ball.speedY;
}

function updateBall() {
    ball.x-=ball.speedX;
    ball.y-=ball.speedY;
}

function touchBallBar() {
    const isBallTouchBar=ball.x+ball.radius>=bar.x && ball.x+ball.radius<=bar.x+bar.width && ball.y+ball.radius>canvas.height-bar.height;
    if (isBallTouchBar) {
        ball.speedY=-ball.speedY;
    }
}
