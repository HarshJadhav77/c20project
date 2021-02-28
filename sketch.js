
var cat,catimg,catimg2,catimg3;
var mouse,mouseimg,mouseimg2,mouseimg3;
var garden,gardenimg;

function preload() {
    //load the images here
   catimg=loadAnimation("cat1.png");
   gardenimg=loadImage("garden.png");
   catimg2=loadAnimation("cat2.png","cat3.png");
   catimg3=loadAnimation("cat4.png");
   mouseimg=loadAnimation("mouse1.png");
   mouseimg2=loadAnimation("mouse2.png","mouse3.png");
   mouseimg3=loadAnimation("mosue4.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(500,400);
    garden.addImage("tree",gardenimg)
    
   cat = createSprite(800,600);
   cat.addAnimation("cat1",catimg);
   cat.scale = 0.2;

   mouse = createSprite(200,600);
   mouse.addAnimation("mouse1", mouseimg);
   mouse.scale= 0.15;
}

function draw() {
     background(bg);
    //Write condition here to evalute if tom and jerry collide
   
   if(cat.x - mouse.x  < (cat.width/2 - mouse.width/2))
   {
     cat.velocityX = 0;
     cat.addAnimation("last",catimg3)
     cat.x =300;
     cat.scale=0.2;
     cat.changeAnimation("last");
     mouse.addAnimation("Last", mouseImg3);
     mouse.scale=0.15;
     mouse.changeAnimation("Last");
   }


   
    drawSprites();
}


 function keyPressed(){
  
  if(keyCode === LEFT_ARROW)
  {
    cat.velocityX= -5;
    cat.addAnimation("walk",catimg2);
    cat.changeAnimation("walk");

    mouse.addAnimation("tease", mouseImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("tease");
  }
}
