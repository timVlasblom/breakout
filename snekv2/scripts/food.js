"use strict"

function makeFood(){
	foodX = (Math.floor((Math.random() * 27) + 2));
	foodY = (Math.floor((Math.random() * 27) + 2));
	for (var i = 0; i < snakeLength - 1; i++) {
		var j = movements - snakeLength + i;
		while (foodX*20 == bodyX[j] && foodY*20 == bodyY[j]){
		  foodX = (Math.floor((Math.random() * 27) + 2));
		  foodY = (Math.floor((Math.random() * 27) + 2));
		}
	}
  if ((Math.floor((Math.random() * 100))) === 1){
    superfood = true;
  }
}

function drawFood(){

  if (superfood == true){
    canvas.fillStyle = "#ffa500";
  }
  else{
    canvas.fillStyle="#FF0000";
  }
  canvas.fillRect(foodX *20, foodY *20, 20, 20);
  canvas.stroke();
}

function checkFood(){
  if (headX == foodX*20 && headY == foodY*20){
    if (superfood == true){
      snakeLength += 2;
      superfood = false;
      makeFood();
    }
    else{
      snakeLength ++;
      makeFood();
    }
  }
}
