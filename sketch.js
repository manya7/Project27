
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var object1,object2,object3,object4,object5,object6,object7,object9;
var roof;
var chain1,chain2,chain3,chain4,chain5,chain6,chain7;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
object1=new Bob(200,500,6);
object2=new Bob(250,500,6);
object3=new Bob(300,500,6);
object4=new Bob(350,500,6);
object5=new Bob(400,500,6);
object6=new Bob(450,500,6);
object7=new Bob(500,500,6);

roof=new Roof(350,200,500,50);


//chain1=new Chain(object1.body,roof.body,10,10)
chain1=new Chain(object1.body,roof.body,-150,10)
chain2=new Chain(object2.body,roof.body,-100,10)
chain3=new Chain(object3.body,roof.body,-50,10)
chain4=new Chain(object4.body,roof.body,0,10)
chain5=new Chain(object5.body,roof.body,50,10)
chain6=new Chain(object6.body,roof.body,100,10)
chain7=new Chain(object7.body,roof.body,150,10)


}

function draw() {
  rectMode(CENTER);
  background("blue");
  keyPressed();
  
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
 chain6.display();
 chain7.display();

  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();
  object6.display();
  object7.display();

  roof.display();

 

  drawSprites();
 
}

function keyPressed(){

  if (keyCode===UP_ARROW){
  
    background("red")
  Matter.Body.applyForce (object1.body,object1.body.position,{x:-150,y:-60})
  }
  
  }
  
  
  
 

