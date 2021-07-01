var runner,running,edges;
var pathimage;
var path;
var inv1,inv2;

function preload(){
  //pre-load images
  running=loadAnimation("Runner-1.png","Runner-2.png")
  pathimage=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
  edges=createEdgeSprites();

  path=createSprite(200,200);
  path.addImage(pathimage);
  //pathimage.x=path.width/2
  path.velocityY=4;
  path.scale=1.2
  inv1=createSprite(390,200,20,400);
  inv1.visible=false
  inv2=createSprite(10,200,20,400);
  inv2.visible=false

  runner=createSprite(180,340,30,30);
  runner.addAnimation("running1",running);
}

function draw() {
  background("white");
  runner.x=World.mouse.x;
  if(path.y>400){
    path.y=200
  }
  runner.collide(inv1);
  runner.collide(inv2);
  runner.collide(edges[3])
  drawSprites();   
  
}
