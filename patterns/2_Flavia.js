let spacing = 50;  // Spacing between shapes
let size = 30;     // Size of the shapes
let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  background(255);  // White background
}

function draw() {
  if (random(1) < 0.5) {
  fill(64, 224, 208);  // Aqua color
  noStroke();
  ellipse(x + size / 2, y + size / 2, size, size);
    } else {
  fill(138, 43, 226);  // Purple color
  noStroke();
  rect(x, y, size, size);   
    }
  

    x = x + spacing;
    if (x > width) {
      x = 0;
      y = y + spacing;
    }
  }