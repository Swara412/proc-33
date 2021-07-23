const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow=[];
function preload(){
  bg = loadImage("snow3.jpg");
 

}

function setup() {
  createCanvas(700, 400);
  engine = Engine.create();
  world = engine.world;
  
  
  
  if(frameCount%100===0){
    for(var i=0;i<100;i++){
      snow.push(new Snow(random(0,700),random(0,400)))
    }
  }

}

function draw() {
  background(bg);  
  Engine.update(engine);


  for( var i=0;i<100;i++){
    snow[i].display();
    snow[i].update();
  }
  drawSprites();
}