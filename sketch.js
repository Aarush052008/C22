//physics engine 

//namespacing
//creates the physics engine
const Engine = Matter.Engine;

//creates a physical world inside the engine
const World = Matter.World;

//creates physical objects inside the world. 
const Bodies = Matter.Bodies;

var engine1;
var ground;
var world1;
var ball;

function setup() {
  createCanvas(800,400);

 engine1 =  Engine.create();
 world1 = engine1.world;


 var ground_options = {
   isStatic : true
 }

 //creates a rectangle only in computer memory 
 ground = Bodies.rectangle(200,390,800,20,ground_options);
 World.add(world1,ground);

 ball = Bodies.circle(200,100,20,{restitution:0.8});
 World.add(world1,ball);


 console.log(ball);
 console.log(ball.position.x);
 console.log(ball.position.y);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  //activate the engine 
  Engine.update(engine1);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}