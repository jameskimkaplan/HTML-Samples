var player1, player2, bullet;

function setup () {
    createCanvas(600,800);
    player1 = new Player();
    player2 = new Player();
    bullet = new Bullet();
}

function draw() {
    background(51);
    player1.show();
    bullet.show();
    //player1.move();

    //player2.show();
    //player2.move();
  
}

function keyPressed() {
    if (keyCode === LEFT_ARROW){
        player1.move(-10);
        bullet.move(-10);
    } else if (keyCode === RIGHT_ARROW) {
        player1.move(10);
        bullet.move(10);
    }
}