var canvas = document.getElementById ("Canvas");
var context = canvas.getContext("2d");

imgDog = new Image();
imgDog.src = "/Maze game/Maze_dog.svg"
imgDog.addEventListener("load", init, false);

var requestAnimFrame =
               window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.oRequestAnimationFrame ||
               window.msRequestAnimationFrame ||
               function (callback) {
                 window.setTimeout(callback, 1000/60);
               };
var DogX = 65;
var DogY = 65;

function init() {
    requestAnimationFrame(update);

}

function update() {
    context.drawImage(imgDog, 65, 65, 100, 77);
    context.fillRect( 10, 10, 40, 380, '#000000');
    context.fillRect( 10, 10, 380, 40, '#000000');
    context.fillRect( 10, 350, 380, 40, '#000000');
    context.fillRect( 350, 10, 40, 380, '#000000');
    context.fillRect( 180, 10, 40, 180, '#000000');

    requestAnimationFrame(update);
}
