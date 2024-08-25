let r;
let g;
let b;
let wid;
let h;
let angle;
function setup(){
  createCanvas(innerWidth, innerHeight);
  wid = innerWidth/2;
  h = innerHeight/2;
  setValues();
  alert("Touch the screen to change to a different random angle.");
  alert("If you enjoyed it,don't forget to like and Follow Somesh Singh");
}
function draw(){
  background(0);
  translate(innerWidth/2, innerHeight/2);  
  var wave = sin(radians(frameCount));
  var w = wave*map(0, 0, innerHeight, innerWidth, 0);  
  for(var i=0; i<200; ++i){
    rotate(angle);
    stroke(r1,g1,b1);
    line(wid*2, i-w, -wid*2, ++i);
    stroke(r2,g2,b2);
    line(-wid*2, i-w, wid*2, ++i);
  }
}
function setValues(){
  r1 = random(0,255);
  g1 = random(0,255);
  b1 = random(0,255);
  r2 = random(0,255);
  g2 = random(0,255);
  b2 = random(0,255);
  angle = random(0.5,6.28); 
  console.log("Rotation angle in radians: " + angle);
}
function touchStarted(){
    setValues();
}
