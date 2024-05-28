let spacing = 60; // Distanza tra le forme
let x = 0; // Coordinata x iniziale
let y = 0; // Coordinata y iniziale

function setup() {
  createCanvas(windowWidth, windowHeight); // Crea una tela con larghezza e altezza della finestra
  background(0); // Imposta lo sfondo nero
}

function draw() {
  // Disegna un cerchio, un rettangolo o un triangolo in base a un valore casuale
  if (random(1) < 0.33) {
    // Disegna un cerchio
    fill(random(255), random(255), random(255)); // Colore casuale per il riempimento
    strokeWeight(3); // Spessore del bordo
    stroke(random(255), random(255), random(255)); // Colore casuale per il bordo
    ellipse(x + spacing / 2, y + spacing / 2, spacing - 20, spacing - 20); // Disegna un cerchio alle coordinate (x + spacing / 2, y + spacing / 2)
  } else if (random(1) < 0.66) {
    // Disegna un rettangolo
    fill(random(255), random(255), random(255)); // Colore casuale per il riempimento
    strokeWeight(3); // Spessore del bordo
    stroke(random(255), random(255), random(255)); // Colore casuale per il bordo
    rectMode(CENTER); // Imposta la modalità di disegno dei rettangoli con il centro alle coordinate specificate
    rect(x + spacing / 2, y + spacing / 2, spacing - 20, spacing - 20); // Disegna un rettangolo alle coordinate (x + spacing / 2, y + spacing / 2)
  } else {
    // Disegna un triangolo
    fill(random(255), random(255), random(255)); // Colore casuale per il riempimento
    strokeWeight(3); // Spessore del bordo
    stroke(random(255), random(255), random(255)); // Colore casuale per il bordo
    triangle(
      x + 10,
      y + spacing - 10,
      x + spacing - 10,
      y + spacing - 10,
      x + spacing / 2,
      y + 10
    ); // Disegna un triangolo con i punti specificati
  }

  x = x + spacing; // Incrementa la coordinata x di "spacing"
  if (x > width - spacing) {
    // Se x supera la larghezza della tela meno "spacing"
    x = 0; // Reimposta x a 0
    y = y + spacing; // Incrementa la coordinata y di "spacing" per passare alla riga successiva
  }
}