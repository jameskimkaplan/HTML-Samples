function Player() {

    this.x = width / 2;
    this.show = function () {
        fill(255);
        rectMode(CENTER);
        rect(this.x, height - 30, 20, 60);
    }
    this.move = function (dir) {
        this.x += dir;
    }
    /*
        this.x = width/2;
        
        this.show = function () {
            fill(255);
            rectMode(CENTER);
            rect(width/2, height-30, 20,60);
        }
        this.move = function (dir) {
            this.x += dir;
        }
    */
}