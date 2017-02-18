var gravity;
var wind;
var frictionCoeff = 0.4;

var balls = [5];

function setup(){
	createCanvas(800,480);
	background(0);

	//frameRate(15);
	gravity = new createVector(0,0.3);
	wind = new createVector(0.2,0);

	for(var i=0; i< 5; i++){
		balls[i] = new Ball();
	}
	
}
function mousePressed(){
	for(var i=0; i< 5; i++){
		var jump = new createVector(0,-70);
		balls[i].applyForce(jump);
	}
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		wind.x +=0.2 * -1;
		//wind.mult(-1);
	}else if(keyCode === RIGHT_ARROW){
		wind.x +=0.2 * 1;
		//wind.mult(1);
	}
}

function draw(){

	background(0);

	
	for(var i=0; i< balls.length; i++){
		var friction = balls[i].velocity.copy();
		friction.normalize();
		friction.mult(-1);
		friction.mult(frictionCoeff);

		balls[i].applyGravity(gravity);
		balls[i].applyForce(friction);
		balls[i].applyForce(wind);
		balls[i].update();
		balls[i].edges(width,height);
		balls[i].draw();
	}
	fill(255);
	textSize(12);
	for(var i=0; i< balls.length; i++){
		text("Ball mass: "+balls[i].mass, 10, 20 * i);
		text("Ball velocity: "+balls[i].velocity.y, 10 + 200, 20 * i);
	//ellipse(100,100,20,20);
	}
}