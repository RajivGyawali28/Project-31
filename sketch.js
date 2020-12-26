const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particle = [];
var plinko = [];
var division = [];
var divisionHeight=300;

function setup() {
  createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  for(var i = 50; i <= width; i=i+60){
    plinko.push(new Plinko(i,75));
}

for(var i = 25; i <= width; i=i+60){
  plinko.push(new Plinko(i,175));
}

for(var i = 50; i <= width; i=i+60){
  plinko.push(new Plinko(i,275));
}

for(var i = 25; i <= width; i=i+60){
  plinko.push(new Plinko(i,375));
}

for(var j = 10; j<=width; j=j+80){
  division.push(new Division(j,height-divisionHeight/2,10,divisionHeight))
}

  ground = new Ground(240,796,600,10);

}

function draw() {
  background("black");  
  Engine.update(engine);

  for(i=0;i<plinko.length;i++){
    plinko[i].display();
  }

  for(j=0;j<division.length;j++){
    division[j].display();
  }

  if(frameCount % 40==0){
    particle.push(new Particle(random(width/2-50,width/2+50),10,10))
  }

  for(t=0;t<particle.length;t++){
    particle[t].display();
  }

  ground.display();

  drawSprites();
}