function Ball(radius, color)
{
	if(radius === undefined) {
		radius = 30;
	}
	if(color === undefined) {
		color = "blue";
	}

	this.x = 0; 
	this.y = 0;
	this.rotaton = 0;
	this.radius = radius;
	this.color = color;
	this.showFlame = false;
}

Ball.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);

	if(this.showFlame) {


		context.fillStyle = "white";
		context.strokeStyle = "Blue";
		context.beginPath();
		context.arc(0, 0, this.radius*5, 0, (Math.PI*2),true);
		context.fill();
		context.stroke();
		context.closePath();
	}
	if(this.showFlame) {


		context.fillStyle = "red";
		context.beginPath();
		context.moveTo(-10, -25);
		
		context.lineTo(-70, -20);
		context.lineTo(-40, -15);		

		context.lineTo(-100, 0);
		
		context.lineTo(-40, 15);
		context.lineTo(-70, 20);
		context.lineTo(-10, 25);

		context.fill();
		context.closePath();
	}


	context.fillStyle = this.color;
	context.beginPath();
	context.arc(0, 0, this.radius, 0, (Math.PI*2-12),true);
	context.closePath();
	context.fill();

	context.fillStyle = "white";
	context.beginPath();
	context.arc(13, -12, 10, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();

	context.fillStyle = "#000000";
	context.beginPath();
	context.arc(13, -12, 5, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();

	context.fillStyle = "#000000";
	context.beginPath();
	
	context.moveTo(5, 5);
	context.lineTo(30,0);
	context.lineTo(25,15);
	
	context.closePath();
	context.fill();	
	context.restore();
};


Ball.prototype.getBounds = function() {

   return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2
   };
};