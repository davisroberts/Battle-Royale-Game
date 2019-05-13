
function setup() {
  createCanvas(1500,800);
}

function draw(){
	background(141, 172, 221)


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
rect(660, 260, 10,100)
rect(670, 360, 80,10)
rect(545, 200, 10,150)
ellipse(900,500,70,70)
ellipse(1000,350,170,170)
ellipse(820,375,50,50)

//boxes in bottom left
rect(550, 575, 25, 25);
rect(680, 595, 25, 25);
rect(630, 495, 25, 25);
rect(460, 455, 25, 25);
rect(449, 550, 25, 25);
rect(575, 275, 25, 25);
stroke(0, 0, 0);

//loot boxes



fill("orange");
rect(530, 510, 35, 35);
rect(530, 460, 35, 35);
rect(720, 165, 35, 35);
rect(660, 110, 35, 35);
rect(855, 315, 35, 35);
rect(1000, 530, 35, 35);
rect(740, 700, 35, 35);
fill("black");
text(("E"), 545, 532)
text(("E"), 545, 482)
text(("E"),735, 188 )
text(("E"),675, 135)
text(("E"),755, 722)
text(("E"),1015, 552)
text(("E"),867, 340)

fill("silver")
ellipse(470,390,40,40)
ellipse(612,210,40,40)
ellipse(900,210,40,40)
ellipse(630,670,40,40)
ellipse(900,630,40,40)


fill("red")
rect(725,400,50,50)
fill("white")
text(("Space"), 732,430)

fill(0)
  line(mouseX, 0, mouseX, 800);
   line(0, mouseY, 1500, mouseY);

}
