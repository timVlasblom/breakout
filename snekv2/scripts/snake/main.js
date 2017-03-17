"use strict"

function drawCube(x, y, snakeColor){
  canvas.fillStyle=snakeColor;
  canvas.fillRect(x, y, 19, 19);
  canvas.stroke();
}

function changeDirection(dir){
	  direction = dir;
}

function moveSnake(){
	if (ai == true){
		moveSelf();
	}
	lastDirection = direction;
  if (direction == 'left'){
    oldHeadX = headX;
    headX = headX - 20;
    if (snakeLength < 3){
      snakeLength++;
    }
  }
  if (direction == 'up'){
    oldHeadY = headY;
    headY = headY - 20;
    if (snakeLength < 3){
      snakeLength++;
    }
  }
  if (direction == 'right'){
    oldHeadX = headX;
    headX = headX + 20;
    if (snakeLength < 3){
      snakeLength++;
    }
  }
  if (direction == 'down'){
    oldHeadY = headY;
    headY = headY + 20;
    if (snakeLength < 3){
      snakeLength++;
    }
  }
  if (headX >= 600){
    alert("rip in pies")
    reset()
  }
  if (headX < 0){
    alert("rip in pies")
    reset()
  }
  if (headY < 0){
    alert("rip in pies")
    reset()
  }
  if (headY >= 600){
    alert("rip in pies")
    reset()
  }
	checkFood();
  drawCube(bodyX[movements], bodyY[movements]);
  bodyX[movements] = headX;
  bodyY[movements] = headY;
  if (direction != ""){
    if (oldHeadX != headX || oldHeadY != headY){
    movements++;
    }
  }
  drawSnake();
}

function drawSnake(){
  canvas.clearRect(0,0,600,600);
  canvas.fillStyle = "#d3d3d3";
  canvas.fillRect(600, 0 , 10, 600);
  drawScoreboard();
  drawFood(foodX *20, foodY *20);
  drawCube(headX, headY , "#00FF00");
  for (var i = 0; i < snakeLength - 1; i++) {
    var j = movements - snakeLength + i;
    drawCube(bodyX[j], bodyY[j]);
    if (bodyX[j] == headX && bodyY[j] == headY){
      if(i != 0){
        alert("no eating yourself!!!");
        reset();
      }
    }
  }
  showScore();
}
