var x=0,y=0;

function setup() {
    createCanvas(600,800);
}

function draw() {
    background(150,50,100);
    //Task1
    //draw a line for Y axis
    // Your code here..
    //line(200, 0,200 ,height );
    //line(400, 0,400 ,height );
    //Task2
    //draw a line for X axis
    //Your code below...
    //line( 0, 200, width,200 );


    //Task3
    //draw Y axis lines with for loop statement
    //Your code is below
    //inside of for (), beginning; ending; incremental condition
    /*
    for(x=0; x<width; x = x+20 ) {
        line(x, 0, x, height );
    }
    */
    //Task4
    // draw X axis lines with for Loop statement
    // Your code is below
    /* 
    for( y=0; y < height; y += 20) {
        line(0, y,width,y);
    }
     */
    //Task5
    //draw rects X axis with for Loop statement
    //fill rect with random color from white to black
    // Your code is below
    for(y=0;y <height; y +=10) {
        for(x=0;x < width; x += 10) {
            //fill(100);
            //fill( random(255), random(255), random(255));
            noStroke();
            fill( x/3, y/8, y/5);
            rect(  x,  y,  10, 10 );
        }
    }
    
        



    //Task6
    //Draw rects X and Y axis with for Loop Statement
    //Your code is below




    //Task7
    
  
}