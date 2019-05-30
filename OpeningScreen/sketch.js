var button;
function setup() {
  createCanvas(1500,800);
  fill("green");
  button = createButton('P    L    A    Y');
  button.position(566,601);
  button.mousePressed(changeBG);
  button.size(299,99)

}




function draw(){
  background(255, 223, 150)
fill(149, 237, 137)
stroke("black")
fill("black")
noStroke();
textFont("Helvetica")
textSize(40)
  text(("L O R E N Z O  a n d  D A V I S ' S"),400,100)
textSize(25)
text(("E N J O Y !"),650,500)
  textSize(60)
textFont('Georgia')
  text(("B  A  T  T  L  E    R  O  Y  A  L  E"),290,300)

}

function changeBG() {
  var val = ("green");
  background(val);


}
