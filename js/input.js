const keyLeftArrow = 37;
const keyUpArrow = 38;
const keyRightArrow = 39;
const keyDownArrow = 40;

const keyW = 87;
const keyD = 68;
const keyS = 83;
const keyA = 65;

var mouseX = 0;
var mouseY = 0;

function setupInput(){
  canvas.addEventListener('mousemove', updateMousePos);

  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);

  greenCar.setupInput(keyW, keyD, keyS, keyA);
  blueCar.setupInput(keyUpArrow, keyRightArrow, keyDownArrow, keyLeftArrow);
}


function updateMousePos(evt){
  var rect = canvas.getBoundingClientRect(); //position on the page of the canvas
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;

//cheat /hack to test car in any position
  /*carX = mouseX;
  carY = mouseY;
  carSpeedX = 4;
  carSpeedY = -4;*/
}

function keySet(keyEvent, whichCar, setTo){
  if (keyEvent.keyCode == whichCar.controlkeyLeft){
    whichCar.keyHelfTurnLeft = setTo;
  }
  if(keyEvent.keyCode == whichCar.controlKeyRight){
    whichCar.keyHeldTurnRight = setTo;
  }
  if(keyEvent.keyCode == whichCar.controlKeyUp){
    whichCar.keyHeldGas = setTo;
  }
  if(keyEvent.keyCode == whichCar.controlKeyDown){
    whichCar.keyHeldReverse = setTo;
  }
}


function keyPressed(evt){
//console.log("key pressed: " + evt.keyCode);
keySet(evt, greenCar,true);
keySet(evt, blueCar,true);
}


function keyReleased(evt){
  //console.log("key released: " +evt.keyCode);
  keySet(evt, greenCar,false);
  keySet(evt, blueCar,false);
}
