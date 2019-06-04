var health = 100
let balls = [];
let me;
let m = 0;
let boxfill = 0;
let checkright;
let checkleft;
let checkup;
let checkdown;
let kyler;

function preload(){
  img = loadImage('lorenzodavisshotgun.png');
  img2 = loadImage('lorenzodavisenergyrifle.png');
  img3 = loadImage('lorenzodavissniper.png');
  img4 = loadImage('lorenzodavissmg.png');
}

function setup() {
  createCanvas(1500,800);
  me = new Avatar(width/2, 300, 3);
}

function draw(){
  checkright = get(me.x + 16, me.y);
  checkleft = get(me.x - 16, me.y);
  checkdown = get(me.x, me.y + 16);
  checkup = get(me.x, me.y - 16);
  // print(c);
	background(141, 172, 221)

noStroke();
  fill(255);
  rect(0, 0, 75, 20);

  //text showing mouse coordinates
  fill(255, 0, 0);
textSize(15)
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
stroke("orange");
line(mouseX, 0, mouseX, 800);
line(0, mouseY, 1500, mouseY);



fill("orange");
rect(530, 510, 35, 35);
rect(530, 460, 35, 35);
fill("black");
text(("E"), 545, 532)


rect(760, 160, 10,150);
rect(660, 260, 10,100)
rect(660, 360, 80,10)
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
ellipse(500,300,40,40)
ellipse(800,110,40,40)
ellipse(730,666,40,40)
ellipse(1000,480,40,40)

keyPressed();
weapons();
image(img, 1400, 700, 70, 70);
image(img2, 1300, 700, 70, 70);
image(img3, 1200, 700, 70, 70);
image(img4, 1100, 700, 70, 70);
textSize(32);
text(("4"), 1430, 670);
text(("3"), 1330, 670);
text(("2"), 1230, 670);
text(("1"), 1130, 670);
me.drawMe();
me.moveMe();


line(mouseX, 0, mouseX, 800);
line(0, mouseY, 1500, mouseY);
}


function keyPressed(){
  if (frameCount % 5 == 0) {
    if (keyCode === 49){
    boxfill = 1;
    }
    else if (keyCode === 50){
      boxfill = 2;
    }
    else if (keyCode === 51){
      boxfill = 3;
    }
    else if (keyCode === 52){
      boxfill = 4;
    }
  }
}

function weapons(){

  push();
  if (boxfill==1){
    m = 1000
    weaponbox();
    pop();
  }

  else{
    push();
    weaponbox();
    pop();
  }

  push();
  translate(-100,0);
  if (boxfill = 2){
    m = 1000
    weaponbox();
    pop();
  }

  else{
    push();
    translate(-100,0);
    weaponbox();
    pop();
  }

  push();
  if (boxfill==3){
    translate(-200,0);
    m = 1000;
    weaponbox();
    pop();
  }

  else{
    push();
    translate(-200,0);
    weaponbox();
    pop();
  }

  push();
  if (boxfill ==4){
    translate(-300,0);
    m = 1000;
    weaponbox();
    pop();
  }

  else{
    push();
    translate(-300,0);
    weaponbox();
    pop();
  }

}

function weaponbox(){
  noFill(),
  strokeWeight(10);
  rect(1390, 690, 100, 100);
  fill(11, 36, 251, m);
  rect(1390, 690, 100, 100);
}

class Avatar {

  health = 100;

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("blue");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,30,30);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
        if (checkup[0]>10){
          this.y -= this.speed;
        }
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
      if (checkdown[0]>10){
        this.y += this.speed;
      }
    }
    if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move up by speed
      if (checkleft[0]>10){
       this.x -= this.speed;
      }
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
      if (checkright[0]>10){
        this.x += this.speed;
      }
    }
	}
class Bot {


}
}
