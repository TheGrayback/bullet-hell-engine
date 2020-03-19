//import Bullet from './Bullet.js';

class BulletManager {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.bullets = [];
	}

	update() {
		if (this.bullets.length == 0) {
			console.log("there are no bullets to update");
			return;
		}

		var deleteBullets = [];

		this.bullets.forEach(function callback(currentValue, index, array) {
			if (!currentValue.update()) {
				currentValue.on = false;
				//deleteBullets.push(index);
				//array.splice(index, 1);
			}
		});

		// Recorrer balas apagadas y sacarlas
		this.bullets.forEach(function callback(currentValue, index, array) {
			if (currentValue.on === false) {
				//console.log(currentValue);
				delete array[index];
				array.splice(index, 1);
			}
		});
	}

	bulletCollision(playerx, playery, playerRadius, bulletRadius) {
		for (var i = 0; i < this.bullets.length; i++) {
			if (this.collision(playerx, playery, playerRadius, this.bullets[i].x, this.bullets[i].y, bulletRadius)) {
				console.log("collision!");
				return true;
			}
		}

		return false;
	}

	collision(p1x, p1y, r1, p2x, p2y, r2) {
		var a;
		var x;
		var y;

		a = r1 + r2;
		x = p1x - p2x;
		y = p1y - p2y;

		if (a > Math.sqrt((x * x) + (y * y))) {
			return true;
		} else {
			return false;
		}
	}

	addBullet(x, y, direction, speed) {
		this.bullets.push(new Bullet(x, y, direction, speed, this));
	}

	addArc(x, y, direction, speed, amount, spread) {
		var directionIncrement = spread / amount;

		if (amount <= 0) return;

		if (amount % 2 != 0) {
			// Odd amount, centered
			this.addBullet(x, y, direction, speed);

			for (var i = 1; i <= (amount-1)/2; i++) {
				this.addBullet(x, y, direction-i*directionIncrement, speed);
				this.addBullet(x, y, direction+i*directionIncrement, speed);
			}
		} else {
			// Even amount, free space in the middle
			for (var i = 0; i < amount/2; i++) {
				this.addBullet(x, y, (direction-directionIncrement/2)-i*directionIncrement, speed);
				this.addBullet(x, y, (direction+directionIncrement/2)+i*directionIncrement, speed);
			}
		}
	}

	addCircle(x, y, direction, speed, amount) {
		for (var i = 0; i < amount; i++) {
			this.addBullet(x, y, direction+i*360/amount, speed);
		}
	}

	addLine(x, y, direction, minSpeed, maxSpeed, amount) {
		var speedDiff = maxSpeed - minSpeed;
		var speedIncrement = speedDiff / (amount - 1);

		for (var i = 0; i < amount; i++) {
			var currentSpeed = minSpeed + i * speedIncrement;
			this.addBullet(x, y, direction, minSpeed+i*speedIncrement);
		}
	}

	addMultiArc(x, y, direction, minSpeed, maxSpeed, arcAmount, lineAmount, spread) {
		var speedDiff = maxSpeed - minSpeed;
		var speedIncrement = speedDiff / (arcAmount - 1);

		for (var i = 0; i < arcAmount; i++) {
			var currentSpeed = minSpeed + i * speedIncrement;
			this.addArc(x, y, direction, currentSpeed, lineAmount, spread);
			//this.addBullet(x, y, direction, minSpeed+i*speedIncrement);
		}
	}

	addMultiCircle(x, y, direction, minSpeed, maxSpeed, circleAmount, lineAmount) {
		var speedDiff = maxSpeed - minSpeed;
		var speedIncrement = speedDiff / (circleAmount - 1);

		for (var i = 0; i < circleAmount; i++) {
			var currentSpeed = minSpeed + i * speedIncrement;
			this.addCircle(x, y, direction, currentSpeed, lineAmount);
			//this.addBullet(x, y, direction, minSpeed+i*speedIncrement);
		}
	}
}

//export { Scene };
//export default Scene;