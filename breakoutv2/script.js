"use strict"

var c = document.getElementById("MyCanvas");
var canvas = c.getContext("2d");

var ballX = 290,
    ballY = 480,
    peddleX = 250,
    peddleWidth = 100,
    brickWidth = 39,
    brickheigth = 19,
    brickAmount = 90,
    test = true,
    xMovement = 0,
    ballDirection = "up",

    bricksX = new Array(),
    bricksY = new Array();

startGame();
keyboardControl();
setInterval(function(){
  moveBall();
}, 50);

function keyboardControl(){
 document.addEventListener('keydown', function(event) {
   if(event.keyCode == 37 || event.keyCode == 65) {
       movePeddle("right");
   }
   else if(event.keyCode == 39 || event.keyCode == 68) {
        movePeddle("left");
   }
 });
}

function drawBall(ballX, ballY){
  canvas.fillRect(ballX, ballY, 10, 10);
  canvas.stroke();
}

function drawPeddle(peddleX){
  canvas.fillRect(peddleX, 550, peddleWidth, 10);
  canvas.stroke();
}

function drawBrick(brickX, brickY){
  switch (Math.floor((Math.random() * 3) + 1)){
    case 1:{
      canvas.fillStyle="#FF0000";
    break;
    }
    case 2:{
      canvas.fillStyle="#0000ff";
    break;
    }
    case 3:{
      canvas.fillStyle="#008000";
    break;
    }
  }
  canvas.fillRect(brickX, brickY, brickWidth, brickheigth);
  canvas.stroke();
  canvas.fillStyle="#000000";
}

function startGame(){
  drawBall(ballX, ballY);
  drawPeddle(250);
  var x = 0;
  var y = 0;
  for (var i = 0; i < brickAmount; i++) {
    bricksX[i] = x;
    bricksY[i] = y;
    drawBrick(x, y);
      x = x + brickWidth +1;
    if (x >= 600){
      x = 0;
      y = y + brickheigth +1;
    }
  }
}

function movePeddle(direction){
  if (direction == "right"){
    peddleX = peddleX - 20;
    if(peddleX < 0){
      peddleX = 0;
    }
    canvas.clearRect(0,549,600,100);
  }
  if (direction == "left"){
    peddleX = peddleX + 20;
    if(peddleX > 600 - peddleWidth){
      peddleX = 600 - peddleWidth;
    }
    canvas.clearRect(0,549,600,100);
  }
  drawPeddle(peddleX);
}

function moveBall(){
  canvas.clearRect(ballX, ballY, 10, 10);
  ballX = ballX + xMovement;
  if (ballDirection == "up"){
    ballY -= 10;
  }

  if (ballDirection == "down"){
    ballY += 10;
  }

  if (ballX >= 600){
    ballX = 600;
    xMovement = xMovement - (xMovement*2);
    ballX = 600;
  }

  if (ballX <=0){
    xMovement = xMovement - (xMovement*2);
    ballX = 0;
  }

  if (ballY >=600){
    if (test){
      ballDirection = "up";
    }
    else{
    alert("yu suck")
    }
  }

  if (ballY <= 0){
    ballDirection = "down";
  }

  if (ballX >= peddleX && ballX <= (peddleX + 33)){
    if (ballY >= 540 && ballY <= 560){
      xMovement = xMovement + Math.floor(Math.random() * 20) - 10;
      ballDirection = "up";
    }
  }

  if (ballX >= peddleX + 33 && ballX <= (peddleX + 66)){
    if (ballY >= 540 && ballY <= 560){
      ballDirection = "up";``
    }
  }

  if (ballX >= peddleX + 66 && ballX <= (peddleX + 100)){
    if (ballY >= 540 && ballY <= 560){
      xMovement = xMovement + Math.floor(Math.random() * 20) - 10;
      ballDirection = "up";
    }
  }

  if (xMovement > 15){
    xMovement = 15;
  }
  
  if (xMovement < -15){
    xMovement = -15;
  }
  checkBricks();
  drawPeddle(peddleX);
  drawBall(ballX, ballY);
}

function checkBricks(){
  for (var i = 0; i < brickAmount; i++) {
    if ((ballX >= bricksX[i] || ballX + 10 >= bricksX[i]) && (ballX <= bricksX[i] +brickWidth || ballX + 10 <= bricksX[i] +brickWidth)){
      if (ballY >= bricksY[i] && ballY <= bricksY[i] +brickheigth){
        canvas.clearRect(bricksX[i], bricksY[i], brickWidth, brickheigth);
        bricksX[i] = 600;
        bricksY[i] = 0;
        if (ballDirection == "up"){
          ballDirection = "down";
        }
        else if (ballDirection == "down"){
          ballDirection = "up";
        }
      xMovement = xMovement + Math.floor(Math.random() * 20) - 10;
      xMovement = xMovement - (xMovement*2);
      }
    }
  }
}
