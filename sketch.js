const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12
var superhero,slingshot,monster

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(1200,600);
  ground=new Ground(600,550,1200,20);
  box1=new Box(620,480)
  box2=new Box(700,480)
  box3=new Box(780,480)
  box4=new Box(860,480)
  box5=new Box(620,380)
  box6=new Box(700,380)
  box7=new Box(780,380)
  box8=new Box(860,380)
  box9=new Box(620,280)
  box10=new Box(700,280)
  box11=new Box(780,280)
  box12=new Box(860,280)
  superhero=new SuperHero(300,400,80,80);
  monster=new Monster(950,100,100,100)
      slingshot=new Slingshot(superhero.body,{x:300,y:100});
}

function draw() {
  
  background("plum");
  Engine.update(engine);
  superhero.display()
    
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12 .display()
  ground.display()
  slingshot.display()
  monster.display()
}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}