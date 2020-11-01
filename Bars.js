function BarUp() {

	this.x = 0;
	this.y = 0;
	this.color = "green";
	this.rotation = 0;
	this.heightUp = -100;
}

BarUp.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 4;
	context.rotate(this.rotation);
	

	// Up Bars;
	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-30,-300);
	context.lineTo(30,-300);
	context.lineTo(30, this.heightUp);
	context.lineTo(-30,this.heightUp);
	context.closePath();

	context.fill();
	context.stroke();


	context.restore();

};

BarUp.prototype.getBounds = function() {

   return {
      x: this.x - 30,
      y: 0,
      width: 30 * 2,
      height: this.heightUp + 300
   };
};


function BarDown() {

	this.x = 0;
	this.y = 0;
	this.color = "green";
	this.rotation = 0;
	this.heightDown = 100;
}

BarDown.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 4;
	context.rotate(this.rotation);
	
	
	// Down Bars 
	context.fillStyle = this.color;
	context.beginPath();

	context.moveTo(-30,this.heightDown);
	context.lineTo(30, this.heightDown);
	context.lineTo(30, 300);
	context.lineTo(-30, 300);

	context.closePath();

	context.fill();
	context.stroke(); 

	context.restore();

};


BarDown.prototype.getBounds = function() {

      return {
      x: this.x-30,
      y: this.y + this.heightDown,
      width: 30*2,
      height: 600};
}; 