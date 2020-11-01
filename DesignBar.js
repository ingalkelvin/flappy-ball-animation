function DesignBar() {
	

	this.x = 0;
	this.y = 0;
	this.color = "blue";
	this.rotation = 0;
}

DesignBar.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 4;
	context.rotate(this.rotation);

	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-700,-10);
	context.lineTo(700,-10);
	context.lineTo(700,10);
	context.lineTo(-700,10);

	
	context.closePath();

	context.fill();
	context.stroke();

	context.restore();

};
