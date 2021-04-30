var h,m,s
var hangle,mangle,sangle
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
}

function draw() {
  background(0); 
  translate(250,250);
  rotate(-90)
  h=hour()
  m=minute()
  s=second()
  hangle=map(h%12,0,12,0,360)
  mangle=map(m,0,60,0,360)
  sangle=map(s,0,60,0,360)
  push ()
  rotate (mangle)
  stroke ("white")
  line (0,0,180,0)
  console.log (h)
  pop ()
  push ()
  rotate(sangle)
  stroke("white")
  line(0,0,130,0)
  pop ()
  push ()
  rotate(hangle)
  stroke("white")
  line(0,0,70,0)
  pop()
  noFill()
  stroke ("gray")
  arc(0,0,370,370,0,mangle)
  arc(0,0,270,270,0,sangle)
  arc(0,0,150,150,0,hangle)


  

  drawSprites();
}