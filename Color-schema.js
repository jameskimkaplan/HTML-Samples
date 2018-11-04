var rX, rY;

//var bg;
//var player1;

function setup() {
    //create Canvas here
    createCanvas(600,800);
    //background(100);
    //bg = loadImage("./images/overwatch1.png");
    //player1 = loadImage("./images/player1.png");

}
function draw() {
    //background(100);
    //background(bg);
    
    for (rY=0; rY < height; rY += 5) {
        //for every cols
        for (rX=0; rX < width; rX += 5){
            //fill random color from white to black
            //fill(random(255),random(255),random(255));
            noStroke();
            fill(rX/3,rY/4,50);
            //draw square 
            rect(rX,rY,10,10);
        }
    }

    //line(100,100,width,height);


    
}

