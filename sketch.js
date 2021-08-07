var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = 4;

  gameObject1 = createSprite(200, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(300, 100, 50, 50);
  gameObject2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";

  }
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  bounceOff(movingRect, fixedRect);
  
  drawSprites();
}

function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    &&object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2 ){

   object1.velocityX = object1.velocityX * (-1);
   object1.velocityY = object1.velocityY * (-1);
}

}

