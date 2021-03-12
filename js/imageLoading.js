var carPic = document.createElement("img");
var carPicTwo = document.createElement("img");
var trackPics= [];


var picsToLoad = 0; //sett automatically based on images in imageList


function countLoadedImagesAndLoad(){
      picsToLoad--;
      if(picsToLoad == 0){
        imageLoadingDoneStartGame();
      }
  }

  function beginLoadingImage(imgVar, fileName){
    imgVar.onload = countLoadedImagesAndLoad;
    imgVar.src= "images/"+fileName;
  }

  function loadImageForTrackCode(trackCode, fileName){
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode], fileName);
  }

  function loadImages(){
    var imageList=[
      {varName: carPic, theFile: "blue_car.png" },
      {varName: carPicTwo, theFile: "green_car.png" },

      {trackType: trackRoad, theFile: "soil_road.png" },
      {trackType: trackWall, theFile: "track_wall.png" },
      {trackType: trackGoal, theFile: "track_goal.png" },
      {trackType: trackTree, theFile: "grass_bush.png" },
      {trackType: trackFlag, theFile: "track_flag.png" },
      {trackType:trackAudience, theFile: "track_audience.png"}
    ];

    picsToLoad = imageList.length;

    for(var i=0; i<imageList.length; i++){
        if(imageList[i].varName != undefined){
          beginLoadingImage(imageList[i].varName, imageList[i].theFile);
        } else{
          loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
        }
      }
}
