var car, wall;
var speed, weight;


function setup() {
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(20, 125, 20, 10);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2);
  createCanvas(1500,400); 
}

function draw() {
  background(0, 9, 0);  
  car.shapeColor = "white";
  wall.shapeColor = color(80, 80, 80);
  rect(0, 145, 1500, 5);
  rect(0, 195,  1500, 5);
  rect(0, 245, 1500, 5);

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
      car.velocityX=0;
      var deformation=0.5 * width * speed* speed/22500;
      if(deformation>180)
      {
        car.shapeColor = color(255, 0, 0);
      }
      if(deformation<180 && deformation>100)
      {
        car.shapeColor = color(230, 230, 0);
      }
      if(deformation<100)
      {
        car.shapeColor = color(0,255,0);
      }
    }

  drawSprites();
}