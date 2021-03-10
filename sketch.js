const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine,myWorld;
var ground;
var ball;

function setup(){
  var canvas=createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options = {
    isStatic: true
  }

 ground = Bodies.rectangle(200,390,200,20,ground_options);
 World.add(myWorld,ground);

 var ball_options = {
   restitution: 1.0
 }

 ball = Bodies.rectangle(200,100,20,20,ball_options);
 World.add(myWorld,ball);

 console.log(ground)

}
function draw()
{
  background(0);
  Engine.update(myEngine);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
  rect(ball.position.x,ball.position.y,20,20);
}
