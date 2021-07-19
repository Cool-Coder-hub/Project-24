const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberObj;
var stoneObj;
var ironObj;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubberObj = new Rubber(900,450,70);
    stoneObj = new Stone(600,450,30,30);
    ironObj = new Iron(300,450,50,50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubberObj.display();
    stoneObj.display();
    ironObj.display();

 
}