var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var particle;


var gameState="start";


var divisionHeight=300;
var score =0;
var count=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    ground = new Ground(width/2,height,width,70);  

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  text("500",25,520);
  text("500",110,520);
  text("500",185,520);
  text("500",260,520);
  text("100",340,520);
  text("100",420,520);
  text("100",500,520);
  text("200",580,520);
  text("200",660,520);
  text("200",750,520);
  Engine.update(engine);

  if(gameState==="end"){
    textSize(32);
    text("GAME OVER",301,250);
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   //display the particle
   if(particle!=null){
    
    particle.display();
    console.log(particle.body.position.y);
    if(particle.body.position.y>750){
      
      if(particle.body.position.x<300){
        score=score+500;
        particle =null;
      if(count>=5) gameState="end";
        
      }
      else if(particle.body.position.x>301 && particle.body.position.x<600){
        score = score+100;
        particle =null;
      if(count>=5) gameState="end";
      
        
      }else if (particle.body.position.x>601 && particle.body.position.x<900){
        score = score+200;
        particle =null;
      if(count>=5) gameState="end";
      }
     
    }
   }
   ground.display();
}

function mousePressed(){

    if(gameState!=="end"){
      count++;
      particle= new Particle(mouseX,10,10,10);

    }
}