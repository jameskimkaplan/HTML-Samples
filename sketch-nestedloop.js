var x, y;
function setup() {
    createCanvas(600,800);

}

function draw() {
    //line for Y axis
    //for (x=0; x < width; x = x + 20){
    //    line(x,0,x,height);
    //}
    //line for x axis
    //for (y=0; y < height; y = y + 20) {
    //    line(0,y,width,y);
    //}
    //draw square for the grid
    // every rows
    //    every cols;
    //       rect;
    // for every rows
    for (y=0; y < height; y = y + 20) {
        //for every cols
        for (x=0; x < width; x = x + 20){
            //fill random color from white to black
            fill(random(255),random(255),random(255));
            //draw square 
            rect(x,y,20,20);
        }
    }
}