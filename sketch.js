
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,box;
var ground,ball;
function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  var ground_option ={
    isStatic: true

  }
  ground=Bodies.rectangle(200,390,400,50,ground_option)
  World.add(myWorld,ground);
console.log(ground)
 
var option={
    restitution: 1.0
  }
ball=Bodies.circle(200,100,20,option)
World.add(myWorld,ball);
  }


function draw() {
  background(0); 
  Engine.update(myEngine) 
  rectMode(CENTER)
  
  //ellipseMode(RADIUS)
  rect(ground.position.x,ground.position.y,400,50),
circle(ball.position.x,ball.position.y,50)
  drawSprites();
}