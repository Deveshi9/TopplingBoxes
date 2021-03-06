const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,width,20)
  box1= new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70)
  pig3 = new Pig(810,220);

  log3 = new Log(810,180,300,PI/2)

}

function draw() {
  background("LightSkyBlue");  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig3.display();
  log3.display();
 
}