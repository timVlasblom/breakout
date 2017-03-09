var c = document.getElementById("MyCanvas");
var canvas = c.getContext("2d");

var direction = "",
    headX = 300,
    headY = 300,
    foodX = 0,
    foodY = 0,
    superfood = false,
    movements = 0,
    snakeLength = 1;

var bodyX = new Array();
var bodyY = new Array();

makeFood();
drawCube(300, 300);
keyboardControl();
setInterval(function(){
  moveSnake();
}, 100);

function keyboardControl(){
 document.addEventListener('keydown', function(event) {
   if(event.keyCode == 39 || event.keyCode == 68) {
    if(direction != "left"){
      changeDirection("right");
    }
   }
   else if(event.keyCode == 37 || event.keyCode == 65) {
    if(direction != "right"){
      changeDirection("left");
    }
   }
   else if(event.keyCode == 38 || event.keyCode == 87) {
    if(direction != "down"){
      changeDirection("up");
    }
   }
   else if(event.keyCode == 40 || event.keyCode == 83 ) {
    if(direction != "up"){
      changeDirection("down");
    }
   }
 });
}


function drawCube(x, y, snakeColor){
  canvas.fillStyle=snakeColor;
  canvas.fillRect(x, y, 9, 9);
  canvas.stroke();
}

function changeDirection(dir){
  direction = dir;
  console.log(direction)
}

function moveSnake(){
  if (direction == 'left'){
    headX = headX - 10;
  }
  if (direction == 'up'){
    headY = headY - 10;
  }
  if (direction == 'right'){
    headX = headX + 10;
  }
  if (direction == 'down'){
    headY = headY + 10;
  }
  if (headX >= 600){
    alert("rip in pies")
    reset()
  }
  if (headX <= 0){
    alert("rip in pies")
    reset()
  }
  if (headY <= 0){
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
  movements++;
  drawSnake();
}

function makeFood(){
  foodX = (Math.floor((Math.random() * 57) + 2));
  foodY = (Math.floor((Math.random() * 57) + 2));
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
  canvas.fillRect(foodX *10, foodY *10, 10, 10);
  canvas.stroke();
}

function checkFood(){
  if (headX == foodX*10 && headY == foodY*10){
    if (superfood == true){
      snakeLength ++;
      snakeLength ++;
      superfood = false;
      makeFood();
    }
    else{
      snakeLength ++;
      makeFood();
    }
  }
}

function drawSnake(){
  canvas.clearRect(0,0,600,600);
  drawFood(foodX *10, foodY *10);
  drawCube(headX, headY , "#00FF00");
  for (var i = 0; i < snakeLength - 1; i++) {
    j = movements - snakeLength + i;
    drawCube(bodyX[j], bodyY[j]);
    if (bodyX[j] == headX && bodyY[j] == headY){
      if(i != 0){
        reset();
      }
    }
  }
  console.log("===================")
  showScore()
}

function showScore(){
  canvas.fillStyle = "#000000";
  canvas.font = "15px Arial";
  canvas.fillText("score " + snakeLength,10,20);
}

function reset(){
  headX = 300,
  headY = 300,
  superfood = false,
  movements = 0,
  snakeLength = 1;
  makeFood();
}
