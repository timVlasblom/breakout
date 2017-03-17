"use strict"

var c = document.getElementById("MyCanvas");
var canvas = c.getContext("2d");

var direction = "",
    headX = 300,
    headY = 300,
    oldHeadX = 300,
    oldHeadY = 300,
    foodX = 0,
    foodY = 0,
    superfood = false,
    movements = 0,
    leaderboard = 80,
    playerNumber = 1,
		ai = false,
		lastDirection = "",
		left = true,
		up = true,
		down = true,
		right = true,
    snakeLength = 1;

var bodyX = new Array();
var bodyY = new Array();
var players = [
  { name: "tim",score: 172, moves: 9452}
];
