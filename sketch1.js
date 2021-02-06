const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,box;
var ground,ball;
function setup(){
    createCanvas(400,400)
    myEngine=Engine.create()
    myWorld=myEngine.world
    var option={
        isStatic:true
    }

ground=Bodies.rectangle(200,380,400,20,option)
World.add(myWorld,ground)
  // ground= createSprite(400,200,50,50)
  console.log(ground)
}

function draw(){
    background(0);
    Engine.update(myEngine)
   rectMode(CENTER)
  //  drawSprites();
  rect(ground.position.x,ground.position.y,400,50)
}