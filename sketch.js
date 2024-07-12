

var colorInc = 0.5; 
var sat = 40;
var brt = 100;
var alph = 10;
var numbPart = 4000;
var partStroke = 1.5;
var angMult = 2;
var angTurn = 10;
var zOffInc = 0.0005;
var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
var fr;
var particles = [];
var flowfield;
var hu = 0;
var p = 1;

function setup() {
  createCanvas(3700, 1900);
  colorMode(HSB,250,100,50,100);

  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < numbPart; i++) {
    particles[i] = new Particle();
  }
  background(0);
}

function draw() {
  if (p>0){
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff)*angMult+angTurn;  
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
    }
    yoff += inc;

    zoff += zOffInc;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  hu +=colorInc; if (hu >359){hu=0}
}
}

//press p for pausing
function keyTyped() {
  if (key === "p") {
     p=p*-1;
  }

  //press c for curving
  if (key === "c") {
    angMult=angMult +1; 
    console.log(angMult);
  }

  //press s for straightening
  if (key === "s") {
    if(angMult>0){angMult=angMult -1;}
    else{angMult=angMult}
    console.log(angMult);
  }

  //press h for save canvas
  if (key === "h") {
    save("myCanvas.jpg");
 }
}

//inverting when double click
function doubleClicked() {
  filter(INVERT);
}

