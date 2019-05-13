
function setup() {
  createCanvas(1500,800);
}

function draw(){
	background(141, 172, 221)
fill(0)
  line(mouseX, 0, mouseX, 800);
   line(0, mouseY, 1500, mouseY);

noStroke();
  fill(255);
  rect(0, 0, 75, 20);

  //text showing mouse coordinates
  fill(255, 0, 0);
  text("("+mouseX + ", " + mouseY+")", 5, 15);

fill("white")
ellipse(750,400,700);
fill("black")
//top right obstacles
rect(500, 200, 55, 10);
rect(550, 150, 250, 10);
function setup() {
  createCanvas(1500,800);
}

function draw(){
	background(141, 172, 221)
fill(0)


noStroke();
  fill(255);
  rect(0, 0, 75, 20);

  //text showing mouse coordinates
  fill(255, 0, 0);
  text("("+mouseX + ", " + mouseY+")", 5, 15);

fill("white")
ellipse(750,400,700);
fill("black")
//top right obstacles
rect(500, 200, 55, 10);
rect(550, 150, 250, 10);
rect(760, 160, 10,150);
//boxes in bottom left
rect(550, 575, 25, 25);
rect(680, 595, 25, 25);
rect(630, 495, 25, 25);
rect(460, 405, 25, 25);
rect(449, 550, 25, 25);
rect(600, 375, 25, 25);
//loot boxes
stroke(0);
line(mouseX, 0, mouseX, 800);
 line(0, mouseY, 1500, mouseY);



fill("orange");
rect(530, 510, 35, 35);
rect(530, 460, 35, 35);
fill("black");
text(("E"), 545, 532)

}

rect(760, 160, 10,150);
//boxes in bottom left
rect(550, 575, 25, 25);
rect(680, 595, 25, 25);
rect(630, 495, 25, 25);
rect(460, 405, 25, 25);
rect(449, 550, 25, 25);
rect(600, 375, 25, 25);
//loot boxes



fill("orange");
rect(530, 510, 35, 35);
rect(530, 460, 35, 35);
fill("black");
text(("E"), 545, 532)

}
