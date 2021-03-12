const trackW = 40;
const trackH = 40;
const trackGap = 2;
const trackCol = 20;
const trackRows = 15;
var levelOne = [
         4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4,
				 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
				 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 0, 1,
				 1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1,
				 1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 2, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 1, 1, 1, 0, 0, 1, 1, 5, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
				 0, 3, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
				 0, 3, 0, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4];

//var levelList = [levelOne, levelTwo];

var trackGrid = [];


const trackRoad = 0;
const trackWall = 1;
const trackPlayerStart = 2;
const trackGoal = 3;
const trackTree= 4;
const trackFlag = 5;
const trackAudience = 6;

function drawTracks(){
  var arrayIndex = 0;
  var drawTileX = 0;
  var drawTileY = 0;
  for (var eachRow = 0; eachRow < trackRows; eachRow++){
    for (var eachCol=0; eachCol<trackCol; eachCol++){
      var tileKindHere = trackGrid[arrayIndex];
      var useImg = trackPics[tileKindHere];
       canvasContext.drawImage(useImg, drawTileX,drawTileY);
       drawTileX += trackW;
       arrayIndex++;
     } //end of for each col
     drawTileY += trackH;
     drawTileX =0;
} //end of for each row
}

//helps with edge conditions
function returnTileTypeAtColRow(col,row){
  if(col >=0 && col < trackCol &&
     row >=0 && row < trackRows){
       var trackIndexUnderCord = rowColToArrayIndex(col, row);
       return trackGrid[trackIndexUnderCord];
    }else{
      return trackWall;
    }
}

function carTrackHandling(whichCar){
  //collision code
  var carTrackCol = Math.floor(whichCar.x / trackW);
  var carTrackRow = Math.floor(whichCar.y / trackH);
  var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

  //to prevent tracks on edge from disappearing
  if(carTrackCol >=0 && carTrackCol < trackCol &&
    carTrackRow >=0 && carTrackRow < trackRows){

  var tileHere = returnTileTypeAtColRow(carTrackCol, carTrackRow);

  if(tileHere == trackGoal) { //when a collision has happened
      whichCar.speed *=-0.5;
      document.getElementById("displayWinner").innerHTML = whichCar.name + " wins!";
    //  loadLevel(levelOne); reload level screen to continue playing


  } else if(tileHere != trackRoad){
    whichCar.x -= Math.cos(whichCar.angle) * whichCar.speed;
    whichCar.y -= Math.sin(whichCar.angle) * whichCar.speed;
    whichCar.speed *=-0.5;
  }
  }
} //end of carTrackHandling func

function rowColToArrayIndex(col, row){
  return col + trackCol * row;
}
