var c = document.getElementById("MyCanvas");
var canvas = c.getContext("2d");

var direction = "",
    headX = 300,
    headY = 300,
    oldHeadX = 300;
    oldHeadY = 300;
    foodX = 0,
    foodY = 0,
    superfood = false,
    movements = 0,
    leaderboard = 80,
    playerNumber = 1;
    snakeLength = 1;

var bodyX = new Array();
var bodyY = new Array();
var players = [
  { name: "tim",score: 172, moves: 9452}
];

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
}

function moveSnake(){
  if (direction == 'left'){
    oldHeadX = headX;
    headX = headX - 10;
    if (snakeLength < 3){
      snakeLength++;
    }
  }
  if (direction == 'up'){
    oldHeadY = headY;
    headY = headY - 10;
    if (snakeLength < 3){
      snakeLength++;
    }
  }
  if (direction == 'right'){
    oldHeadX = headX;
    headX = headX + 10;
    if (snakeLength < 3){
      snakeLength++;
    }
  }
  if (direction == 'down'){
    oldHeadY = headY;
    headY = headY + 10;
    if (snakeLength < 3){
      snakeLength++;
    }
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
  if (direction != ""){
    if (oldHeadX != headX || oldHeadY != headY){
    movements++;
    }
  }
  console.log(movements)
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

function drawSnake(){
  canvas.clearRect(0,0,600,600);
  canvas.fillStyle = "#d3d3d3";
  canvas.fillRect(600, 0 , 10, 600);
  drawScoreboard();
  drawFood(foodX *10, foodY *10);
  drawCube(headX, headY , "#00FF00");
  for (var i = 0; i < snakeLength - 1; i++) {
    j = movements - snakeLength + i;
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

function showScore(){
  canvas.fillStyle = "#000000";
  canvas.font = "15px Arial";
  leaderboard = 60;
  for (var i = 0; i < players.length; i++) {
    if (players[i].name != ''){
    canvas.fillText(players[i].name ,615,leaderboard);
    canvas.fillText(players[i].score ,700,leaderboard);
    canvas.fillText(players[i].moves ,750,leaderboard);
    }
    leaderboard += 20;
  }
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

function addToScoreBoard(){
  do{
    var name = prompt("welke held ben jij vandaag? (max 12 characters)");
  }
  while (name.length > 12)

  canvas.fillStyle = "#000000";
  canvas.font = "15px Arial";
  if (name == "" || name == null){
    name = "jodocus";
  }
  players.push({name: name , score: snakeLength-3 , moves: movements});
  for (var i = players.length-2; i >= 0; i--) {
    var j = i+1;
      if(players[i].score < players[j].score){
        var x = { name: '',score: 0, moves: 0 };
        x = players[i];
        players[i] = players[j];
        players[j] = x;
    }
    if(players[i].moves > players[j].moves && players[i].score == players[j].score){
      var x = { name: '',score: 0, moves: 0 };
      console.log("deze" , x)
      x = players[i];
      players[i] = players[j];
      players[j] = x;
  }
  }
  console.log(players[1]);
  playerNumber ++;
  drawScoreboard()
  showScore();
}

function drawScoreboard(){
  canvas.clearRect(610, 0, 190, 600);
  canvas.fillStyle = "#000000";
  canvas.font = "15px Arial";
  canvas.fillText("leaderboard :", 615 , 20);
  canvas.fillText("name", 615 , 40);
  canvas.fillText("score", 700 , 40);
  canvas.fillText("moves", 750 , 40);
  if ((snakeLength) >= 3) {
    canvas.fillText("score: " + (snakeLength-3), 10 , 20);
  }
}
