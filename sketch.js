const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
function preload(){
  bg=loadImage("images/background.png")
  fruit=loadImage("images/melon.png")
  bunnyImg=loadImage("images/Rabbit-01.png")
}

function setup() 
{
  createCanvas(500,600);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,580,600,20);
  rope=new Rope(4,{x:250,y:20})
  food= Bodies.circle(250, 200, 20)
  Composite.add(rope.body,food)
  connect=new Link(rope,food)
  bunny=createSprite(250,520,30,10)
  bunny.addImage(bunnyImg)
  bunny.scale=0.2
  button=createImg("images/cut_btn.png")
  button.position(230,20)
  button.size(50,50)
  button.mouseClicked(function(){
    rope.break()
    connect.break()
  })

}

function draw() 
{
  background(bg);
  ground.show();
  rope.show()
  Engine.update(engine);
  push()
  imageMode(CENTER);
  image(fruit,food.position.x, food.position.y,70,70)
  pop()
 drawSprites()
   
}
