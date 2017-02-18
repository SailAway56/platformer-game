
function Ball(){

	this.width = 20;
	this.height = 20;
	this.accelaration = new createVector(0,0);
	this.velocity = new createVector(0,0);
	this.location = new createVector(random(100,600),200);
	this.mass = random(3,6);
	this.color = new createVector(random(0,255), random(0,255), random(0,255));

	this.applyGravity = function(g){
		var tempGravity = g.copy();
		tempGravity.mult(this.mass * 0.5);
		this.accelaration.add(tempGravity);
	}

	this.applyForce = function(force){
		var tempForce = force.copy();
		tempForce.div(this.mass);
		this.accelaration.add(tempForce);
	}

	this.update = function(){
		this.velocity.add(this.accelaration);
		//this.velocity.limit(5);
		this.location.add(this.velocity);
		this.accelaration.mult(0);
	}

	this.edges = function(w, h){
		if(this.location.x > w-1){
			this.location.x = w;
			this.velocity.x *= -1;
		}else if(this.location.x < 0){
			this.location.x = 0;
			this.velocity.x *= 1;
		}
		if(this.location.y > h-1){
			this.location.y = h;
			this.velocity.y *= -1;
		}else if(this.location.y < 0){
			this.location.y = 0;
			this.velocity.y *= 1;
		}

	}

	this.draw = function(){
		fill(this.color.x, this.color.y, this.color.z);
		noStroke();
		ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);
	}
}