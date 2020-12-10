
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(50,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.14;

  
  ground = createSprite(200,380,500,20);
  ground.velocityX = -5;
  
  /*obstacle = createSprite(200,338,15,15);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.2;*/
  
  
  

  
}


function draw() {
background("white");
  
     if (ground.x < 150){
      ground.x = ground.width/2;
     }
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
  
  
  fruits();
  obstacles();
    
  
  
  
  
  
  drawSprites();
}

function fruits()
{
  if(World.frameCount % 80 === 0)
    {
      banana = createSprite(500,Math.round(random(120,200)),20,20);
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -5;
      banana.lifetime = 130;
    }
  
}

function obstacles()
{
  if(World.frameCount % 200 === 0)
    {
      obstacle = createSprite(400,338,15,15);
      obstacle.addImage(obstaceImage);
      obstacle.scale = 0.2;
      obstacle.velocityX = -5;
    }
  
}





