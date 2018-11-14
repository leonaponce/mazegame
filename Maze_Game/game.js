// Logic for Dog Maze Game

class Game {
   constructor() {
     console.log("Welcome to the Dog Maze Game");

     //Referencing the canvas element
     this.canvas = document.getElementById("game-canvas");
     this.stage = new createjs.Stage(this.canvas);

     createjs.Ticker.setFPS(60);

     //This continually re-draws the stage
     createjs.Ticker.on("tick", this.stage);
   }
}


//Start game
var canvas = document.getElementById ("canvas");
var context = canvas.getContext("2d");

imgDog = new Image();
imgDog.src = "dog_Maze_Img.png";
imgDog.addEventListener("load",init, false);

var requestAnimFrame =
               window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.oRequestAnimationFrame ||
               window.msRequestAnimationFrame ||
               function (callback) {
                   window.setTimeout(callback, 1000/60);
               };
var dogX = 65;
var dogY = 65;

//Functions listed below

function init() {
    requestAnimationFrame(update);
}

function update() {
    dogY = dogY + 3;
    context.clearRect (0, 0, 400, 400);
    context.drawImage(imgDog, dogX, dogY, 100, 77);
    context.fillRect( 10, 10, 40, 380, '#000000');
    context.fillRect( 10, 10, 380, 40, '#000000');
    context.fillRect( 10, 350, 380, 40, '#000000');
    context.fillRect( 350, 10, 40, 380, '#000000');
    context.fillRect( 180, 10, 40, 180, '#000000');

    requestAnimationFrame(update);
}
