let rainDrops = [];
let squares = [];
let startingX = -100;

function setup() {
  createCanvas(600, 600);
  for(let i = 0;i <= 300; i++)
    {
      rainDrops.push(new rainDrop());
    }
    for(let i = 0;i <= 4; i++)
    {
        squares.push(new square());
    }
}

function draw() {
  background(0);
  for(let i = 0; i < rainDrops.length; i++)
  {
    rainDrops[i].drawDrop();
    rainDrops[i].fall();

    if (rainDrops[i].y > height)
    {
      rainDrops[i].reset();
    }
    for( let j = 0; j < squares.length; j++)
    {
      if (rainDrops[i].hasHitSquare(squares[j]))
      {
        rainDrops[i].reset();
        break;
      }
    }
  }
  for(let i = 0; i < squares.length; i++)
  {
    squares[i].drawSquare();
  }
}
class square{
  constructor(){
    this.x = random(0, width);
    this.y = random(0, height);
    this.xSize = random(50,100);
    this.ySize = random(50,100);
    
  }
  drawSquare() {
    stroke(100,100,100);
    fill(100,100,100);
    rect(this.x, this.y, this.xSize, this.ySize);
  }
}

class rainDrop {
  constructor() {
    this.x = random(- 100,width);
    this.y = random(-height,0);
    this.size = random(5,10);
    this.speed = random(8,14);

  }

  fall() {
    this.y = this.y + this.speed;
    this.x = this.x + 1;
  }

  drawDrop(){
    stroke(0, 0, 255);
    strokeWeight(2);
    line(this.x, this.y, this.x + 2, this.y + this.size);
  }

  reset()
  {
    this.x = random(startingX, width);
    this.y = 0;
  }
  hasHitSquare(square){
    return(this.x > square.x && this.x < square.x + square.xSize && this.y > square.y && this.y < square.y + square.ySize);
  }
}

