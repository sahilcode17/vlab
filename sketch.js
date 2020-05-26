var x, y;
var X, Y;
var flag=0

function setup() {
  createCanvas(800, 800);
  x = 400;
  y = 0; 
  X = 1;
  Y = 0.1;
  a= 800;
  b= 40;
  A= -1;
  B= 0.1;
  button = createButton('1');
  button.style('font-size', '10px');
  button.style('background-color', 'yellow');
  button.position(10, 19);
  button.mousePressed(f);
  button = createButton('2');
  button.style('font-size', '10px');
  button.style('background-color', 'yellow');
  button.position(30, 19);
  button.mousePressed(f);
  button = createButton('3');
  button.style('font-size', '10px');
  button.style('background-color', 'yellow');
  button.position(50, 19);
  button.mousePressed(f);
  button = createButton('4');
  button.style('font-size', '10px');
  button.style('background-color', 'yellow');
  button.position(70, 19);
  button.mousePressed(f);
  button = createButton('5');
  button.style('font-size', '10px');
  button.style('background-color', 'yellow');
  button.position(90, 19);
  button.mousePressed(f);
  button = createButton('6');
  button.style('font-size', '10px');
  button.style('background-color', 'yellow');
  button.position(110, 19);
  button.mousePressed(f);
  button = createButton('7');
  button.style('font-size', '10px');
  button.style('background-color', 'yellow');
  button.position(130, 19);
  button.mousePressed(f);
  button = createButton('8');
  button.style('font-size', '10px');
  button.style('background-color', 'yellow');
  button.position(150, 19);
  button.mousePressed(f);
  button = createButton('9');
  button.style('font-size', '10px');
  button.style('background-color', 'yellow');
  button.position(170, 19);
  button.mousePressed(f);
  button = createButton('10');
  button.style('font-size', '10px');
  button.style('background-color', 'yellow');
  button.position(190, 19);
  button.mousePressed(f);
  
  
}
function f(){flag=1}

function draw() {
  background(200);
  strokeWeight(4);
  stroke('black');
  line(400,0,400,800);
  line(799,0,799,800);
  
  if(flag==1)
  {
    if(x<=2000)
    { stroke('red');
      x = x + X;
      y = y + Y;
      if(x<=1000){
      line(x, y, 400, 0);}
      line(x, y+40, 400, 40);
      line(x, y+80, 400, 80);
      line(x, y+120, 400, 120);
      line(x, y+160, 400, 160);
     
      
    }
    if(x>=950)
    { stroke(255, 204, 0);
      if(a>=400)
      {
        a=a +A;
        b=b+B;
        line(a,b , 800, 40);
      }
    }
  }
}