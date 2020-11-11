
var stone;
var ground;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;
var boy;
var launcher;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(1000, 700);


		

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	//Create the body of the boy here.
	boy = new Boy(200,630,200,220);

	//Create the body of stone here.
	stone = new Stone(130,570,25);

	//Create the body of the ground here.
	ground = new Ground(600, 695, 1200, 15);
	
	//Create the tree here.
	tree = new Tree(800,455,350,500);

	//Create the mangoes here.
	mango1 = new Mango(830,255,50,30);
	mango2 = new Mango(790,285,40,30);
	mango3 = new Mango(760,315,40,30);
	mango4 = new Mango(710,375,60,30);
	mango5 = new Mango(780,375,50,30);
	mango6 = new Mango(745,410,45,30);
	mango7 = new Mango(850,375,40,20);
	mango8 = new Mango(820,325,50,30);
	mango9 = new Mango(870,315,50,30);
	mango10 = new Mango(900,355,55,30);
	mango11 = new Mango(940,395,50,30);

	launcher = new Launcher(stone.body,{x: 135, y: 576});	
	
	Engine.run(engine);
  


}



function draw() {
  rectMode(CENTER);
  background(230);
  
  //Display the bodies here.
  
  textSize(18);
  fill("red");
  text("Press Space to get a second chance to play !!!",100,50);


  
  

  boy.display();
  tree.display();
  stone.display();
  launcher.display();

 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  ground.display(); 
 
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);


  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
	launcher.fly();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= lmango.r + lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
		
	}
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:130, y:570})
		launcher.attach(stone.body);
	}
}