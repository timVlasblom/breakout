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

function addToScoreBoard(){
	if (ai == false){
	  do{
	    var name = prompt("welke held ben jij vandaag? (max 11 characters)");
	  }
  	while (name.length > 11)
	}
	else {
		var name = "AI";
	}

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
      x = players[i];
      players[i] = players[j];
      players[j] = x;
  	}
  }
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
