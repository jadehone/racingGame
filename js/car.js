const groundSpeedDecayMult = 0.94;
const drivePower = 0.5;
const reversePower = 0.2;
const turnRate = 0.06;
const minSpeedToTurn = 0.5;

function carClass(){
  this.x = 75;
  this.y = 75;
  this.angle = 0;
  this.speed = 0;
  this.myCarPic;
  this.name = "untitled car";

  this.keyHeldGas = false;
  this.keyHeldReverse = false;
  this.keyHelfTurnLeft = false;
  this.keyHeldTurnRight = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlkeyLeft;

  this.setupInput = function (upKey, rightKey, downKey, leftKey){
  this.controlKeyUp = upKey;
  this.controlKeyRight = rightKey;
  this.controlKeyDown = downKey;
  this.controlkeyLeft = leftKey;
  }


  this.reset = function(whichImage, carName){
    this.name = carName;
    this.myCarPic = whichImage;
    this.speed = 0;

      for (var eachRow = 0; eachRow < trackRows; eachRow++){
        for (var eachCol=0; eachCol<trackCol; eachCol++){
          var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
         if(trackGrid[arrayIndex] == trackPlayerStart){
           trackGrid[arrayIndex] = trackRoad;
           this.angle = -Math.PI/2;
           this.x = eachCol * trackW + trackW/2;
           this.y = eachRow * trackH + trackH/2;
           return;
            }
          }
         }
    }

this.move = function (){
this.speed *=groundSpeedDecayMult; //every frame reduce speed to coast to a stop

  if(this.keyHeldGas){
    this.speed +=drivePower;
  }
  if(this.keyHeldReverse){
    this.speed -=reversePower;
  }
  if (Math.abs(this.speed) > minSpeedToTurn){ //prevent turn on spot
  if(this.keyHelfTurnLeft){
    this.angle -=turnRate;
  }
  if(this.keyHeldTurnRight){
    this.angle +=turnRate;
  }
}
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed;
  carTrackHandling(this);
}

this.draw = function(){
    drawBitmapCenteredWithRotation(this.myCarPic, this.x, this.y, this.angle);
}
}//end of car class
