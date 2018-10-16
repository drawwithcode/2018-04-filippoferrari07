
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textFont('Courier');

}

//variables
var myCircle1;
var myCircle2;
var myCircle3;
var myCircle4;

//circles
function Circle(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = '#d6f4ff';
  this.stroke = noStroke();

  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }

  this.over1 = function(_px, _py) {
    var d = dist(_px, _py, this.x, this.y);

    if (d < this.diameter / 2) {
      this.color = '#4286f4';
    } else {
      this.color = '#d6f4ff';
    }
  }

  this.over2 = function(_px, _py) {
    var d = dist(_px, _py, this.x, this.y);
    if (d < this.diameter / 2) {
      this.color = '#f49a50';
    } else {
      this.color = '#d6f4ff';
    }
  }

  this.over3 = function(_px, _py) {
    var d = dist(_px, _py, this.x, this.y);
    if (d < this.diameter / 2) {
      this.color = '#a065f2';
    } else {
      this.color = '#d6f4ff';
    }
  }

  this.over4 = function(_px, _py) {
    var d = dist(_px, _py, this.x, this.y);
    if (d < this.diameter / 2) {
      this.color = '#8ec639';
    } else {
      this.color = '#d6f4ff';
    }
  }

}

function draw() {

  background('#d6f4ff');

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(30);
  text('Find the circles', width / 2, height / 2);

  var diameter = 250;

  var myCircle1 = new Circle(windowWidth / 4, windowHeight / 4, diameter);
  var myCircle2 = new Circle(windowWidth / 4, (windowHeight / 4) * 3, diameter);
  var myCircle3 = new Circle((windowWidth / 4) * 3, (windowHeight / 4) * 3, diameter);
  var myCircle4 = new Circle((windowWidth / 4) * 3, windowHeight / 4, diameter);


  myCircle1.over1(mouseX, mouseY);
  myCircle2.over2(mouseX, mouseY);
  myCircle3.over3(mouseX, mouseY);
  myCircle4.over4(mouseX, mouseY);

  myCircle1.display();
  myCircle2.display();
  myCircle3.display();
  myCircle4.display();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
