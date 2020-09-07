var wall, thickness, bulletRightEdge;
var bullet, speed, weight, wallLeftEdge;

function setup() {

  createCanvas(1600, 400);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  
  bullet = createSprite(300, 200, 30,10);

  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);

}

function draw() {

  background(255,255,255);

  bullet.velocityX = 15;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }
    if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();

}

function hasCollided(lBullet, lWall){

  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}