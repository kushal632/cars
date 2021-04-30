


var b1,p1,c1,c2,c3,c4,c5,c6;

var road;

var yellowp,car1,car6;

var r1,r2,r3,r4,r5,player

function preload()
{

b1=loadImage("images/backg.jpg");
p1=loadImage("images/p.car.png");
c1=loadImage("images/gcar.png");
c2=loadImage("images/ocar.png");
c3=loadImage("images/bcar.png");
c4=loadImage("images/pcar.png");
c5=loadImage("images/wcar.png");
c6=loadImage("images/ycar.png");

}

function setup()
{
    createCanvas(windowWidth,windowHeight);
  
    
    //creating road
    road = createSprite(width-800,height-100,10,10);
    road.addAnimation("roadimg",b1);
    road.scale = 2

    

    
    r1 = Math.random(300,1000) + Math.round(random(200,700));
    r2 = Math.random(300,1000) + Math.round(random(200,700));
    r3 = Math.random(300,1000) + Math.round(random(200,700));
    r4 = Math.random(300,1000) + Math.round(random(200,700));
    r5 = Math.random(300,1000) + Math.round(random(200,700));
    

    
}

function draw()
{
    background(b1);

    yellow();
    greenp();
    orangep();
    whitep();
    purplep();
    lightBluep();
    playerc();

    if(keyDown("up"))
    {
    car6.velocityY = -12

    }
    

    drawSprites();
      
}

function yellow()
{

        if(frameCount % 60 === 0)
        {

            yellowp = createSprite(200,height-900,10,10);
            yellowp.addImage("xyz",c6);
            yellowp.scale=0.3;
            yellowp.rotation = 90

            if(r1 != r2 && r1 != r3 && r1 != r4 && r1!= r5 )
            {
                yellowp.x = r1;

            }
           

            yellowp.velocityY = 12
        }

        
}

function greenp()
{
    if(frameCount % 60 === 0)
        {
            car1 = createSprite(175,height-900,10,10);
            car1.addImage("xyz",c1)
            car1.scale=0.3
            

            car1.rotation = 90

            if(r2 != r1 && r2 != r3 && r2 != r4 && r2!= r5 ){
                car1.x = r2;
            }
           

            car1.velocityY = 12
        }

}

function orangep()
{
    if(frameCount % 80 === 0)
        {
            car2 = createSprite(175,height-900,10,10);
            car2.addImage("xyz",c2)
            car2.scale=0.25
            

            car2.rotation = 90

            if(r3 != r1 && r3 != r2 && r3 != r4 && r3!= r5 ){
                car2.x = r3;
            }

            car2.velocityY = 12
        }

}

function whitep()
{
    if(frameCount % 110 === 0)
        {
            car5 = createSprite(175,height-900,10,10);
            car5.addImage("xyz",c5)
            car5.scale=0.3

            if(r4 != r1 && r4 != r2 && r4 != r3 && r4!= r5 ){
                car5.x = r4;
            }

            car5.velocityY = 12
        }

}

function purplep()
{
    if(frameCount % 150 === 0)
        {
            car4 = createSprite(175,height-900,10,10);
            car4.addImage("xyz",c4)
            car4.scale=0.2
            

            car4.rotation = 90

            if(r5 != r1 && r5 != r3 && r5 != r2 && r5!= r2 ){
                car4.x = r5;
            }

            car4.velocityY = 12
        }

}

function lightBluep()
{
    if(frameCount % 60 === 0)
        {
            car3 = createSprite(175,height-900,10,10);
            car3.addImage("xyz",c3)
            car3.scale=0.25
            

            car3.rotation = 90

            if(r5 != r1 && r5 != r3 && r5 != r3 && r5!= r4 ){
                car3.x = r5;
            }

            car3.velocityY = 12
        }

}

function playerc()
{
    if(frameCount % 60 === 0)
        {
            car6 = createSprite(width/2,height/2,10,10);
            car6.addImage("xyz",p1)
            car6.scale=0.15;
            

            car6.rotation = 270

            if(r2 != r1 && r2 != r3 && r2 != r4 && r2!= r5 ){
                car6.x = r2;
            }
           

        
        }

        if(keydown("left")){
            velocityX = -10
        }

        if(keydown("right")){
            velocityX = 10
        }

        if(keydown("down")){
            velocityY = 10
        }

       

}


