var isStopped;
var lastxspeed;
var lastyspeed;
var counter;
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.isStopped = 0;
  this.lastxspeed = 0;
  this.lastyspeed = 0;
  this.counter = 1;
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      this.counter++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    if(this.isStopped == 0)
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1 && this.isStopped == 0) {
        console.log('starting over');
        this.total = 0;
        this.counter = 1;

        this.tail = [];
      }
    }
  }

  this.update = function() {
    document.title = "snake - score: " + this.counter;
    if(this.isStopped == 0){
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }
  }

  this.stop = function () {
    this.isStopped = 1;
    this.lastxspeed = this.xspeed;
    this.lastyspeed = this.yspeed;
    this.xspeed = 0;
    this.yspeed = 0;
  }

  this.remuse = function () {
    this.isStopped = 0;
    this.xspeed = this.lastxspeed;
    this.yspeed = this.lastyspeed;
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}
