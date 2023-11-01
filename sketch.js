let img;
function preload() {
  img = loadImage('IMG_8307ab.png');
}
/*
let font;
function preload() {
  font = loadFont('Inconsolata.otf');
}
*/



let x=90;
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);


  /*
  fill(255,255,0);
  textFont(font);
  textSize(36);
  text('p5*js', 100, 50);
  */
  //noLoop();
}

function draw() {
  //background(252,232,206);
  //image(img,10,10);
  loadFont('Inconsolata.otf', font => {
    fill(255,125,125,100);
    textFont(font);
    textSize(30);
    text('The Old Trout',-width/2, -20+height/2);

    describe('The text "p5*js" written in pink on a white background.');
  })


  noStroke();
  texture(img);
push();

  rotateY(x);
  
  sphere(windowWidth/8-20,24);
  pop();
  x=x+0.01;
}
