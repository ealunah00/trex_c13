//variables para el trex y el piso
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

//variables para las nubes
var cloud, cloudsGroup, cloudImage;

//variables para los obstáculos


//variable para la puntuación
var score;


function preload() {
  //cargar animaciones para trex
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  //cargar animaciones para el piso y las nubes
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  
  //cargar animaciones para los obstáculos

}

function setup() {
  createCanvas(600, 200);
  
  //configuración de animaciones y escala para el sprite Trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided" , trex_collided);
  trex.scale = 0.5;
  
  //configuración de imagen, repetición y velocidad para el sprite ground
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;
  
  //configuración para el sprite invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //configuración inicial de la puntuación
  
}

function draw() {
  background(180);

  //dibuja la puntuación y la calcula
  
  
  
  //restringir los saltos
  if(keyDown("space")&& trex.y >= 155) {
    trex.velocityY = -13;
  }
  trex.velocityY = trex.velocityY + 0.8;
  
  //repetir el piso
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  trex.collide(invisibleGround);
  
  //aparecer nubes
  spawnClouds();
  
  //aparecer obstáculos
  spawnObstacles();
  
  drawSprites();
}

function spawnObstacles() {
  //generar obstáculos de cactus con imagen aleatoria, escala y velocidad
  
  

  //agregar imagen aleatoria al obstáculo con un switch
    
    
  //Asignar velocidad, escala y tiempo de vida a un obstáculo     
  
  
}

function spawnClouds() {
  //generar sprites de nubes con imagen, escala y velocidad
  if (frameCount % 60 === 0) {
    cloud = createSprite(600, 100, 40, 10);
    cloud.y = Math.round(random(10, 60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    //asignar tiempo de vida a la variable
    
    
    //ajustar la profundidad
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}