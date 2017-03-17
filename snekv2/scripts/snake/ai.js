"use strict"

function moveSelf(){
	left = true;
	right = true;
	up = true;
	down = true;
	checkSelf();
	checkWalls();
	if (headX == foodX*20){
		if (headY > foodY*20){
			if (direction != "down" && up == true) {
				changeDirection("up");
			}
			else if (headX < foodX && left == true){
				changeDirection("right");
			}
			else if (left == true){
				changeDirection("left");
			}
		}
		else if (headY < foodY*20 && direction != "up" && down == true){
			changeDirection("down");
		}
		else if (headX < foodX && right == true){
			changeDirection("right");
		}
		else if (left == true){
			changeDirection("left");
		}
	}
	else if (headX > foodX*20 && left == true){
		if (direction != "right") {
			changeDirection("left");
		}
		else if (headY < foodY && down == true){
			changeDirection("down");
		}
		else if (up == true){
			changeDirection("up");
		}
	}
	else if (headX < foodX*20){
		if (direction != "left" && right == true) {
			changeDirection("right");
		}
		else if (headY > foodY && up == true){
			changeDirection("up");
		}
		else if (down == true){
			changeDirection("down");
		}
	}
	for (var i = 0; i < 2; i++) {
		if (direction == "down" && down == false){
			direction = "up";
		}
		if (direction == "up" && up == false){
			direction = "left";
		}
		if (direction == "left" && left == false){
			direction = "right";
		}
		if (direction == "right" && right == false){
			direction = "down";
		}
	}
}

function checkSelf(){
	for (var i = 0; i < snakeLength - 1; i++) {
	var j = movements - snakeLength + i;
		if (headX == bodyX[j]-20 && headY == bodyY[j]) {
			right = false;
		}
		if (headX == bodyX[j]+20 && headY == bodyY[j]) {
			left = false;
		}
		if (headX == bodyX[j] && headY == bodyY[j]-20) {
			down = false;
		}
		if (headX == bodyX[j] && headY == bodyY[j]+20) {
			up = false;
		}
	}
}

function checkWalls(){
	if (headX >= 580) {
		right = false;
	}
	if (headX <= 20) {
		left = false;
	}
	if (headY >= 580) {
		down = false;
	}
	if (headY <= 20) {
		up = false;
	}
}
