var x=0,y=0;

function setup() {
    createCanvas(600,800);
    frameRate(1);
}

function draw() {
    background(150,50,100);
    
    //Task1
    //draw a line for Y axis
    // Your code here..
    

    //Task2
    //draw a line for X axis
    //Your code below...
   

    //Task3
    //draw Y axis lines with for loop statement
    //Your code is below
    //inside of for (), beginning; ending; incremental condition
    //for(x=0;x< width;x = x+20) {
    //    line(x,0,x,height);
    //}
    //Task4
    // draw X axis lines with for Loop statement
    // Your code is below
    //for(y=0;y< height;y = y+20) {
    //    line(0,y,width,y);
    //}

    //Task5
    //draw rects X axis with for Loop statement
    //fill rect with random color from white to black
    // Your code is below
    for(y=0;y< height;y = y+20) {
        //draw lines with x axis line in Y axis
        for(x=0;x< width;x = x+20) {
            // draw line with rect in X axis
            //fill(random(255));
            fill(random(255),random(255),random(255));
            rect(x,y,20,20);
            //frameRate(5);
        }   
    }
        



    //Task6
    //Draw rects X and Y axis with for Loop Statement
    //Your code is below




    //Task7
    
  
}