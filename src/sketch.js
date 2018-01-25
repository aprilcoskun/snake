let game;
let scl = 20;
let food;

function setup() {
  createCanvas(800, 600);
  game = new Snake();
  frameRate(Number(window.location.search.substring(1).split('?')));
  spawnFood();
}

function draw() {
  background(31);

  if (game.eat(food)) spawnFood();

  game.death();
  game.update();
  game.show();

  fill(255, 0, 0);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if ((keyCode === UP_ARROW || keyCode === 87) && game.yspeed != 1) {
    game.dir(0, -1);
  } else if ((keyCode === DOWN_ARROW || keyCode === 83) && game.yspeed != -1) {
    game.dir(0, 1);
  } else if ((keyCode === RIGHT_ARROW || keyCode === 68) && game.xspeed != -1) {
    game.dir(1, 0);
  } else if ((keyCode === LEFT_ARROW || keyCode === 65) && game.xspeed != 1) {
    game.dir(-1, 0);
  } else if (keyCode === 32) {
    pause();
  }
}

function pause() {
  if (game.isStopped) game.remuse();
  else game.stop();
}

function spawnFood() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
