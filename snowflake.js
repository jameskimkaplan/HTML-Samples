function getRandomSize(){
    // get two random number and compare one is larger than the other
    //just return smaller number
    //get the smaller snow more and more....
    while(true){
        let r1 = random(1);
        let r2 = random(1);
        if(r2 > r1){
            return r1*36;
        }
    }
}

class Snowflake{
    constructor(sx, sy) {
        let x = sx || random(width);
        let y = sy || random(-100,-10);
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector();
        this.r = getRandomSize();
        //this.r = random(2,15); // get the snow size from random number between 2 to 15

    }
    applyForce(force) {
        //Parallex Effect hack
        let f = force.copy();
        f.mult(this.r);
        //this.acc.add(force);
        //var f = force.copy();
        //f.div(this.mass);
        this.acc.add(f);
    }

    update(){
        //this.force = gravity.copy();
        
        //this.acc = gravity;  ==> add gravity(velocity) to the acc to speed up
        this.vel.add(this.acc);
        this.vel.limit(this.r*0.2);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    rendor() {
        stroke(255);
        strokeWeight(this.r);
        point(this.pos.x, this.pos.y);
    }
    offScreen() {
        return(this.pos.y > height+this.r);
    }
}