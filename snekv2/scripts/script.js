"use strict"

makeFood();
drawCube(300, 300);
keyboardControl();
setInterval(function(){
  moveSnake();
}, 70);

function keyboardControl(){
 document.addEventListener('keydown', function(event) {
   if(event.keyCode == 39 || event.keyCode == 68) {
    if(lastDirection != "left" && ai == false){
      changeDirection("right");
    }
   }
   else if(event.keyCode == 37 || event.keyCode == 65) {
    if(lastDirection != "right" && ai == false){
      changeDirection("left");
    }
   }
   else if(event.keyCode == 38 || event.keyCode == 87) {
    if(lastDirection != "down" && ai == false){
      changeDirection("up");
    }
   }
   else if(event.keyCode == 40 || event.keyCode == 83 ) {
    if(lastDirection != "up" && ai == false){
      changeDirection("down");
    }
   }
 });
}

function reset(){
  addToScoreBoard();
  headX = 300,
  headY = 300,
  superfood = false,
  movements = 0,
  direction = "";
  snakeLength = 1;
  makeFood();
}
