var c = document.getElementById("MyCanvas");
var canvas = c.getContext("2d");

var ballX = 290,
    ballY = 480,
    peddleX = 250,
    peddleWidth = 100;
    brickWidth = 39,
    brickheigth = 19,
    brickAmount = 90;
    ballDirection = "north";
    var bricksX = new Array();
    var bricksY = new Array();

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
    drawBrick(x, y);
    x = x + brickWidth +1;
    if (x >= 600){
      x = 0;
      y = y + brickheigth +1;
    }
    bricksX[i] = x;
    bricksY[i] = y;
  }
}

function movePeddle(direction){
  if (direction == "right"){
    peddleX = peddleX - 10;
    if(peddleX < 0){
      peddleX = 0;
    }
    canvas.clearRect(0,549,600,100);
  }
  if (direction == "left"){
    peddleX = peddleX + 10;
    if(peddleX > 600 - peddleWidth){
      peddleX = 600 - peddleWidth;
    }
    canvas.clearRect(0,549,600,100);
  }
  drawPeddle(peddleX);
}

function moveBall(){
  canvas.clearRect(ballX, ballY, 10, 10);
  switch (ballDirection) {
    case "north":{
      ballY = ballY -10;
      break;
    }
    case "northEast":{
      ballX = ballX +10;
      ballY = ballY -10;
      break;
    }
    case "east":{
      ballX = ballX +10;
      break;
    }
    case "southEast":{
      ballX = ballX +10;
      ballY = ballY +10;
      break;
    }
    case "south":{
        ballY = ballY +10;
        break;
    }
    case "southWest":{
      ballX = ballX -10;
      ballY = ballY +10;
      break;
    }
    case "west":{
        ballY = ballY -10;
        break;
    }
    case "northWest":{
      ballX = ballX -10;
      ballY = ballY -10;
      break;
    }
  }
  if (ballX >=600){
    ballX = 600;
    if (ballDirection == "northEast"){
      ballDirection = "northWest";
    }
    if (ballDirection == "southEast"){
      ballDirection = "southWest";
    }
  }
  if (ballX <=0){
    if (ballDirection == "northWest"){
      ballDirection = "northEast";
    }
    if (ballDirection == "southWest"){
      ballDirection = "southEast";
    }
  }
  if (ballY >=600){
    alert("yu suck")
  }
  if (ballY <=0){
    if (ballDirection == "northEast"){
      ballDirection = "southEast";
    }
    if (ballDirection == "northWest"){
      ballDirection = "southWest";
    }
    else{
      ballDirection = "south";
    }
  }
  if (peddleWidth == 100){
    if (ballX >= peddleX && ballX <= (peddleX + 33)){
      if (ballY >= 540 && ballY<= 560){
        ballDirection = "northWest";
      }
    }
    if (ballX >= peddleX + 33 && ballX <= (peddleX + 66)){
      if (ballY >= 540 && ballY <= 560){
        ballDirection = "north";
      }
    }
    if (ballX >= peddleX + 66 && ballX <= (peddleX + 100)){
      if (ballY >= 540 && ballY <= 560){
        ballDirection = "northEast";
      }
    }
  }
  checkBricks();
  drawBall(ballX, ballY);
}

function checkBricks(){
  for (var i = 0; i < brickAmount; i++) {
    if (ballX >= bricksX[i]  && ballX <= bricksX[i] +brickWidth ){
      if ( ballY >= bricksY[i] && ballY <= bricksY[i] +brickheigth){
        canvas.clearRect(bricksX[i], bricksY[i], brickWidth, brickheigth);
        bricksX[i] = 600;
        bricksY[i] = 0;
        if (ballDirection == "northEast"){
          ballDirection = "southEast";
        }
        if (ballDirection == "northWest"){
          ballDirection = "southWest";
        }
        if (ballDirection == "north"){
          ballDirection = "south";
        }
      }
    }
  }
}
