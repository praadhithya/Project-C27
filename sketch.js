var bobObject1,bobObject2,bobObject3,bobObject4
var rope1,rope2,rope3,rope4
var roof,roofObject
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bobDiameter;
function preload()
{
		
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    bobDiameter = 10;
    //Create the Bodies Here.
    roofObject = new Roof (350,100,200,20)
   // fill("blue");
    bobObject1 = new bob (300,200,20,20)
   // fill("red");
    bobObject2 = new bob (320,200,20,20)
    fill("yellow");
    bobObject3 = new bob (350,200,20,20)
   // fill("blue");
    bobObject4 = new bob (380,200,20,20)
    bobObject5 = new bob (400,200,20,20)
    rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2-60,0)
    rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*2-30,0)
    rope3 = new Rope(bobObject3.body,roofObject.body,-bobDiameter,0)
    rope4 = new Rope(bobObject4.body,roofObject.body,-bobDiameter*2+30,0)
    rope5 = new Rope(bobObject5.body,roofObject.body,-bobDiameter*2+60,0)
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);

  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  }
function keyPressed(){
    if (keyCode == LEFT_ARROW){
     Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-60,y:65})
    console.log(bobObject1.body)
}
}  


