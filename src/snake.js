let isStopped;
let lastxspeed;
let lastyspeed;
//let counter;
function Snake() {
  this.x = 20;
  this.y = 20;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.isStopped = false;
  this.lastxspeed = 0;
  this.lastyspeed = 0;
  this.eat = pos => {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
        this.total++;
        return true;
    } else {
    return false;
    }
  }

  this.dir = (x, y) => {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = () => {
    if(!this.isStopped)
    for (var i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1 && !this.isStopped) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
      }
    }
  }

  this.update = () => {
    document.title = "score: " + this.tail.length;
    if(!this.isStopped){

        //wall teleport method(still buggy /*sometimes can't eat after teleport*/)
        // this x & y pointing beginning of block
        if(this.x == 780 && this.xspeed == 1) {
          this.x = -20;
        }
        else if(this.x == 0 && this.xspeed == -1 ) {
          this.x = 780;
        }
        if (this.y == 580 && this.yspeed == 1) {
          this.y = -20;
        }
        else if (this.y == 0 && this.yspeed == -1) {
          this.y = 580;
        }

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

  this.stop = () => {
    this.isStopped = true;
    this.lastxspeed = this.xspeed;
    this.lastyspeed = this.yspeed;
    this.xspeed = 0;
    this.yspeed = 0;
  }

  this.remuse = () => {
    this.isStopped = false;
    this.xspeed = this.lastxspeed;
    this.yspeed = this.lastyspeed;
  }

  this.show = () => {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}
