var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1img;
var car2img;
var car1;
var car2;
var trackimg;
var cars=[];
var allplayers;
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1img=loadImage("./assets/car1.png");
  car2img=loadImage("./assets/car2.png");
  trackimg=loadImage("./assests/track.jpg");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImage);
  if(playerCount==2){
    game.update(1)
  }
  if(gameState==1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
