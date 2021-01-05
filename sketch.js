const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

function preload(){


}

function setup(){
var canvas = createCanvas(1200,400);

engine = Engine.create();
	world = engine.world;

ground1 = new Ground (350,350,200,10);

block1 = new Block (330,45,30,30);
block2 = new Block ();
block3 = new Block ();
block4 = new Block ();
block5 = new Block ();
block6 = new Block ();
block7 = new Block (350,345,10,10);
block8 = new Block ();
block9 = new Block ();
block10 = new Block ();
block11 = new Block ();
block12 = new Block ();
block13 = new Block ();
block14 = new Block ();
block15 = new Block ();
block16 = new Block ();

Engine.run(engine);
}
 
function draw(){

background(222);
ground1.display();
block7.display();







}
