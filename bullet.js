function Bullet() {
    this.x = width/2;
    this.show = function () {
        fill(255,20,40);
        ellipse(this.x, height-60, 20,20);
    }
    this.move = function (dir) {
        this.x += dir;
    }
}