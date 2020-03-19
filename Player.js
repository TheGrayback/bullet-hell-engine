class Player {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.borderLimit = 8;
		//this.input = input;

		this.speed = 4;

		this.collisioning = false;
	}

	update() {
		if (Input.rightPressed) {
			if (this.x < 640 - this.borderLimit) this.x += this.speed;
		}
		if (Input.leftPressed) {
			if (this.x > this.borderLimit) this.x -= this.speed;
		}
		if (Input.downPressed) {
			if (this.y < 480 - this.borderLimit) this.y += this.speed;
		}
		if (Input.upPressed) {
			if (this.y > this.borderLimit) this.y -= this.speed;
		}
	}

	draw(ctx) {
		ctx.fillStyle = "#00ff00";
		if (this.collisioning) ctx.fillStyle = "#ffffff";

		ctx.beginPath();
	    ctx.arc(this.x, this.y, 6, 0, Math.PI*2);
	    ctx.fill();
	    ctx.closePath();
	}

}