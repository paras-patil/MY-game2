var shooter;
var ground, groundImg, invGround;
var backgroundImg, bg2Img;
var shooterAnim,shooterJump;
var zombieAnimWalk,zombieAnimRun,zombieAnimDead,zombieAnimHurt;
var zombieGroup;
var bulletImage;

function preload(){
 backgroundImg=loadImage("background.JPG") 
 //bg2Img=loadImage("bg2.png")
 //groundImg=loadImage("ground.png")
 shooterAnim=loadAnimation("Sr1.png","Sr2.png","Sr3.png","Sr4.png","Sr5.png","Sr6.png")
 shooterJump=loadAnimation("Sj.png","Sj2.png")

 zombieAnimRun=loadAnimation("Run5.png","Run6.png","Run7.png","Run8.png","Run9.png","Run10.png")
 bulletImage=loadImage("SpongeBullet.png")
}

function setup() {
  createCanvas(500,400);
  
  Background=createSprite(400,150,1000,400);
  Background.addImage(backgroundImg)
  Background.scale=2;

  shooter=createSprite(50,350,50,50);
  shooter.addAnimation("shoot",shooterAnim);
  shooter.scale=0.55;

  

  ground=createSprite(0,390,1000,20);
  ground.shapeColor="black"

  invGround=createSprite(0,390,200,10);
  invGround.visible=false;
}

function draw() {
  background("black");  
  Background.velocityX=-2;

  if(Background.x<0){
    Background.x = 500;
  }
  if(keyDown("space")){
    shooter.velocityY=-10;

  }
  if (keyDown("shift")) {
    var temp_bullet = createBullets();
    temp_bullet.addImage(bulletImage);
     temp_bullet.y = shooter.y;
  }
  shooter.velocityY=shooter.velocityY+0.8;
  shooter.collide(invGround);
  spawnZombies();
  drawSprites();
}

function spawnZombies() {
  //write code here to spawn the zombies
  var rand=Math.round(random(50,100));
  if (frameCount % rand  === 0) {
    var zombie = createSprite(450, 340, 50, 50);
    zombie.addAnimation("run",zombieAnimRun);
    zombie.scale = 0.20;
    zombie.velocityX = -2;

    //assign lifetime to the variable
    zombie.lifetime = 200;

    zombie.collide(invGround);
    //add each zombie to the group
    //zombieGroup.add(zombie);
  }
}

function createBullets() {
  bullet= createSprite(shooter.x, 350, 10, 10);
  bullet.velocityX = 6;
  bullet.scale = 1;
  //arrowGroup.add(arrow);
  return bullet;
  
}

