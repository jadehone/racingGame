var canvas, canvasContext;

var blueCar = new carClass();
var greenCar = new carClass();

window.onload = function (){
  canvas =document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  colorRect(0,0, canvas.width, canvas.height, 'black'); //load screen
  colorText("Loading....", canvas.width/2, canvas.height/2, "white"); //load screen text

  loadImages();
}

function imageLoadingDoneStartGame(){

  var framesPerSecond = 30;
  setInterval(updateAll, 1000/framesPerSecond);

  setupInput();
  loadLevel(levelOne);
    }

function loadLevel(whichLevel){
  trackGrid = whichLevel.slice();
  greenCar.reset(carPicTwo, "Green Beast");
  blueCar.reset(carPic, "Blue Dragon");
}

//Calls motion & draw functions
function updateAll(){
moveAll();
drawAll();

}


//Motion code in moveAll func
function moveAll(){
greenCar.move();
blueCar.move();
}

//draw code in drawAll func
function drawAll(){
  drawTracks();
  greenCar.draw();
  blueCar.draw();
}
