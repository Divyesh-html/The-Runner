var background1
var cone
var player
var bg1
var player1
function preload(){
 background1 = loadImage("Img1.jpg")
 //cone = loadImage("img2.jpg")
 player = loadImage("Img301.png")
}

function setup() {
  createCanvas(1920,1480);
  bg1 = createSprite(650, 640, 50, 50);
  bg1.addImage(background1)
  bus1 = createSprite(345,200,100,50)
  truck1 = createSprite(1120,160,120,50)
  truck2 = createSprite(825,160,120,50)
  car1 = createSprite(1075,640,110,50)
  car2 = createSprite(815,690,100,50)
  car1 = createSprite(110,690,120,50)
  car4 = createSprite(425,1085,120,50)
  car5 = createSprite(735,1085,100,50)
  car6 = createSprite(925,1030,120,50)
  player1 = createSprite(200,1200,20,20)
  player1.addImage(player)
  player1.scale = 0.2
  
  
}

function draw() {
  background(25,255,255);  
 if(keyDown("W")){
  player1.y = player1.y-10
 }
 if(keyDown("S")){
  player1.y = player1.y+10
 }
 if(keyDown("A")){
  player1.x = player1.x-10
 }
 if(keyDown("D")){
  player1.x = player1.x+10
 }
  drawSprites();
}