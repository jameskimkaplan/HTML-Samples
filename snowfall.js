var snow = [];
//let snow = [];  --> local scope of variable

var gravity;


function setup() {
    createCanvas(600,800);
    gravity = createVector(0,0.01);
    
}

function draw() {
    background(0);
    snow.push(new Snowflake());

    //show flakes in the random position of top part, drop the snows to the ground with gravity
    for (flake of snow) {
    //for (let i =0; i <100; i++) {
        flake.applyForce(gravity);
        flake.update();
        flake.rendor();
    }
    // remove the snow flake one to offscreen
    for (var i = snow.length-1; i >= 0; i--){
        if(snow[i].offScreen()){ //new function from snow class offScreen to remove
            snow.splice(i,1);
        }
    }

}