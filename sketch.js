
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, 800, 10 , {isStatic:true} );
	invisiblewall1 = Bodies.rectangle(650,560,5,1800,{isStatic:true});
	invisiblewall2 = Bodies.rectangle(510,560,5,180,{isStatic:true});
	 World.add(world, ground);
	 World.add(world,invisiblewall1);
	 World.add(world,invisiblewall2);
    

	Engine.run(engine);

	box1=new Box(580,555);
	
	ball=new Ball(50,600);
	
    ball.debug = true
	
}


function draw() {
  rectMode(CENTER);
  background("white"); 
  
  ball.display();
  box1.display();
  fill("yellow");
  rect(ground.position.x,ground.position.y,800,10); 
  

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:36,y:-36});
	}
}
