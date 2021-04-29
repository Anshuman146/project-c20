var cat , catImg,catImg2,catImg3;
var rat , ratImg,ratImg2,ratImg3;
var backgrounds , backgroundsImg;
function preload() {
    //load the images here
    backgroundsImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    ratImg = loadImage("images/mouse4.png");
    ratImg2 = loadImage("images/mouse3.png");
    catImg2 = loadImage("images/cat3.png");
    catImg3 = loadImage("images/cat1.png");
    ratImg3 = loadImage("images/mouse1.png");


}

function setup(){
    createCanvas(1000,800);

    backgrounds = createSprite(500,400,800,800);
    backgrounds.addImage("abc",backgroundsImg);
    backgrounds.scale = 1;

    //create tom and jerry sprites here
    cat = createSprite(800,600,10,10);
    cat.addAnimation("cat",catImg);
    cat.scale = 0.2

    rat = createSprite(200,600,10,10);
    rat.addAnimation("rat",ratImg3);
    rat.scale = 0.1
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-rat.x<cat.width-rat.width/2){
        cat.velocityX = 0
        cat.addAnimation("cat",catImg3);
        rat.addAnimation("rat",ratImg3);
        

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown(LEFT_ARROW)){
      rat.addAnimation("rat",ratImg2);
      cat.addAnimation("cat",catImg2);
      cat.velocityX = -3;
      rat.frameDelay = 25;

  }



}
