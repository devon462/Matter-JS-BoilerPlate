
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1
var bobObject1
var roofObject1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  fill("black")
  rect(400,170,720,40)
  fill("black")
  rect(580,400,5,500)
  rect(480,400,5,500)
  rect(380,400,5,500)
  rect(280,400,5,500)
  rect(180,400,5,500)
  ellipseMode(RADIUS)
  fill("red")
  ellipse(176,600,50,50)
  ellipse(276,600,50,50)
  ellipse(376,600,50,50)
  ellipse(476,600,50,50)
  ellipse(576,600,50,50)
  drawSprites();
 
}



