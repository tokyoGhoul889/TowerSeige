
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor1, floor2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9
var ball, ballImg;
var sling;

function preload()
{
  ballImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  floor1 = new Floor(width/2-100, height/2+150, 300, 20);
  floor2 = new Floor(width/2+300, height/2-50, 200, 20);

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  sling = new Sling(this.ball, {x: 100, y: 200});

  box1 = new Box(330, 235,30, 40);
  box2 = new Box(360, 235,30, 40);
  box3 = new Box(390, 235,30, 40);
  box4 = new Box(420, 235,30, 40);
  box5 = new Box(450, 235,30, 40);

  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);

  box9 = new Box(390, 155, 30, 40);
 
  
}

function draw() {
  background(57,43,44);  
  Engine.update(engine);
  drawSprites();
  floor1.display();
  floor2.display();

  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill(135, 205, 235);

  box6.display();
  box7.display();
  box8.display();
  fill(255, 190, 200);

  
  box9.display();
  fill(65, 220, 210);

 
  
  
 
  sling.display();

  imageMode(CENTER);
  image(ballImg, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}