function setup() {
    createCanvas(600, 800);

}

function draw() {
   //background();
   
   if(keyIsDown(LEFT_ARROW)) {
       drawRect(mouseX, mouseY);
   } 
}

function drawCircle(x,y) {
    fill(100);
    ellipse(x,y,100,100);
}

function drawRect(x, y){
    fill(242, 99, 4); //orange
    rect(x,y, 50,50);
}
function drawLine(){
    line(x,y,x+100, y+100);
}
function mousePressed() {
    x = mouseX;
    y = mouseY;
    drawCircle(x,y);
}