class Bullet {
	constructor(x, y, direction, speed, scene) {
		this.x = x;
		this.y = y;
		this.direction = direction;
		this.speed = speed;
		this.scene = scene;
		this.on = true;

		this.polarToCartesianCoordinates();
	}

	setSpeed(speed) {
		this.speed = speed;
		this.polarToCartesianCoordinates();
	}

	setDirection(direction) {
		this.direction = direction;
		this.polarToCartesianCoordinates();
	}

	polarToCartesianCoordinates() {
		this.xspeed = this.speed * Math.cos(this.direction * Math.PI / 180);
		this.yspeed = this.speed * Math.sin(this.direction * Math.PI / 180);
	}

	update() {
		this.x += this.xspeed;
		this.y += this.yspeed;

		if (this.x < 0-32 || this.x > this.scene.width+32 || this.y < 0-32 || this.y > this.scene.height+32) {
			this.on = false;
			return false;
		}

		return true;
	}
}

//export { Bullet };
//export default Bullet;