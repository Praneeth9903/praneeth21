var  moverect,fixrect,r1,r2,r3,r4,ob1,ob2;

function setup(){
  createCanvas(500,500)
    fixrect=createSprite(250,250,50,50);
    fixrect.shapeColor="green";
    fixrect.velocityX=-3;
   
    moverect=createSprite(280,300,50,50);
r1=createSprite(200,10,50,70);
r1.velocityY=3;
r1.shapeColor="orange";
r2=createSprite(10,230,40,50);
r2.velocityX=2;
r3=createSprite(200,300,30,70);
r3.velocityY=-3;
r4=createSprite(490,489,1,1);
}
function draw(){
     background(24,56,78);
     moverect.x=mouseX;
     moverect.y=mouseY;
     console.log(fixrect.x-moverect.x);
     
     rct(moverect,fixrect);
     rct(moverect,r1);
     rct(moverect,r2);
     rct(moverect,r3);
     rct(moverect,r4);

     bounceOff(fixrect,r2);
     drawSprites()

    
    }





















