var x;
var xspeed = 5;


function setup() {
    createCanvas(600, 800);
    x = width/2;
    //background(255, 102, 0);
}

function draw() {
    background(255, 102, 0);
    
    if(x > width){
        xspeed = xspeed*-1;
    }
    if(x < 0){
        xspeed = xspeed*-1;
    }
    x = x + xspeed;
    line(width/2, 0,x, height/2);
    line(width/2, height,x, height/2);
    //1/4 position circle
    line(width/2, 0,x, height/2);
    fill(255,0,255);
    ellipse(x,height/4,50,50);

    fill(0,255,255);
    ellipse(x,height*3/4,50,50);

    //big cirle
    fill(255,0,255);
    ellipse(x,height/2,x/10,x/10);
    //small circle
    fill(0,255,255);
    ellipse(x,height/2,x/15,x/15);
    //stroke(width/50);
    
}