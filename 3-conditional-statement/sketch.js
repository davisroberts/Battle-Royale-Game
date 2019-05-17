//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;

let m = 0;

function preload(){
  img = loadImage('lorenzodavisshotgun.png');
  img2 = loadImage('lorenzodavisenergyrifle.png');
  img3 = loadImage('lorenzodavissniper.png');
  img4 = loadImage('lorenzodavissmg.png');
}

function setup() {
  createCanvas(1500, 800);
  me = new Avatar(width/2, 300, 3);
}

function weapons(){

  noFill();
  push();
  weaponbox();
  pop();

  push();
  translate(-100,0);
  weaponbox();
  pop();

  push();
  translate(-200,0);
  weaponbox();
  pop();

  push();
  translate(-300,0);
  weaponbox();
  pop();


}

function coverbox(){
  if keyPressed(49);
  rect(100, 100, 100, 100);
}

function weaponbox(){
  strokeWeight(10);
  rect(1390, 690, 100, 100);
}

function draw(){
	background(220);
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
  coverbox();
  me.drawMe();
  me.moveMe();

}
//avatar class
class Avatar {

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
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x += this.speed;
    }
	}


//ball class from which to create new balls with similar properties.
}
