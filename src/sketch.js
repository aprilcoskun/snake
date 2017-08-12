var game;
var scl = 20;
var difficulty = getSearchParameters();
var food;
var remuseButton ;
var hiddenMenu = false;
var lastKeyPressed;

function setup() {
  createCanvas(800, 600);
  game = new Snake();
  frameRate(difficulty);
  pickLocation();
}

function mousePressed() {
  game.gamespeed++;
}

function draw() {
  background(31);

  if (game.eat(food)) {
    pickLocation();
  }

  game.death();
  game.update();
  game.show();

  fill(255, 0, 0);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
	if (lastKeyPressed !== keyCode) {
	  if ((keyCode === UP_ARROW || keyCode === 87) && lastKeyPressed !== DOWN_ARROW) {
	    game.dir(0, -1);
	  } else if ((keyCode === DOWN_ARROW || keyCode === 83) && lastKeyPressed !== UP_ARROW) {
	    game.dir(0, 1);
	  } else if ((keyCode === RIGHT_ARROW || keyCode === 68) && lastKeyPressed !== LEFT_ARROW) {
	    game.dir(1, 0);
	  } else if ((keyCode === LEFT_ARROW || keyCode === 65) && lastKeyPressed !== RIGHT_ARROW) {
	    game.dir(-1, 0);
	  } else if (keyCode === 32){
	      pause();
	  }
	}

	lastKeyPressed = keyCode;
}

function pause() {
  if(game.isStopped == 1){
    document.getElementById('button').style.display = 'none';
    game.remuse();
  }
  else{
    game.stop();
    document.getElementById('button').style.display = 'block';
  }
}

function pickLocation() {
 var cols = floor(width/scl);
 var rows = floor(height/scl);
 food = createVector(floor(random(cols)), floor(random(rows)));
 food.mult(scl);
}

function getSearchParameters() {
     var data = window.location.search.substring(1).split("?");
     var yu = Number(data);
     return yu;
}
