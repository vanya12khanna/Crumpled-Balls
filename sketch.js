
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,670,width,20);
	dustbinObj = new dustbin(1250,650);
	paperObject = new paper(400,500);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  paperObject.display();
  dustbinObj.display();

  textSize(50)
  fill("lightpink")
  stroke("blue")
  text("CRUMPLED BALLS",600,50)

  textSize(30)
  fill("blue")
  text("Use the UP ARROW to throw the crumpled paper ball into the dustin!!",350,100)

	console.log(paperObject.body.position.x)

  if(paperObject.body.position.x > 1250){
	textSize(60)
	fill("red")
	text("You Win!!!",700,350)
  }
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Body.applyForce(paperObject.body,paperObject.body.position,{x: 210,y: -170})

	}
}

