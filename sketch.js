var map1,map2,map3,map4,map5
var monster
var mushroom
var start,start1,start2,shop
var smImg
var gameoverImg
var start1Img,start2Img,startImg
var gameState="serve"
var bg,bg1,bg2
var sm

function preload() {
smImg= loadImage("images/super mario 2.png")
//gameoverImg= loadImage("images/game over.png")
start1Img= loadImage("images/start1.png")
start2Img=loadImage("images/start2.png")
startImg=loadImage("images/map 1.png")
shopImg=loadImage("images/shop.png")
sm2Img=loadImage("images/super mario 3.png")
}

function setup() {
 createCanvas(1300,600);

 bg=createSprite(650,300,20,30)
bg.scale=0.9;


bg1=createSprite(650,300,20,30)
bg.scale=0.9;

sm=createSprite(100,475,20,30)
sm.scale=0.35

bg2=createSprite(650,300,20,30)
bg2.scale=0.9;



}




function draw() {



if(gameState==="serve"){
  
  background(start1Img)
  fill("BLACK")
  textSize(30)
text("!PRESS ENTER KEY TO START!",500,350)
if(keyDown("ENTER")){
 bg.addImage(start2Img)

}

if(keyDown("z")||keyDown("Z")){

bg1.addImage(startImg)
}
if(keyDown("Z")||keyDown("z")){

sm.addImage(smImg)
}

if(keyDown("RIGHT_ARROW")){

sm.x=sm.x+4
}

if(keyDown("UP_ARROW")){

sm.y=sm.y-2

}

if(keyDown("DOWN_ARROW")){

sm.y=sm.y+2

}


if(keyDown("LEFT_ARROW")){

sm.x=sm.x-4

}

}
drawSprites();
}


 
