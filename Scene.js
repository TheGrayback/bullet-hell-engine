//import Bullet from './Bullet.js';

class Scene {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.bullets = [];
	}

	addBullet(x, y, direction, speed) {
		this.bullets.push(new Bullet(x, y, direction, speed, this));
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

		/*for (var i = 0; i < this.bullets.length; i++) {
			// Update bullet
			// If the bullet cannot be updated, remove it
			if (!this.bullets[i].update()) {
				console.log("delete bullet " + i);
				//deleteBullets.push(i);
				this.bullets.splice(i, 1);
			}
		}*/

		// Recorrer balas apagadas y sacarlas
		this.bullets.forEach(function callback(currentValue, index, array) {
			if (currentValue.on === false) {
				//console.log(currentValue);
				delete array[index];
				array.splice(index, 1);
			}
		});

		/*console.log(deleteBullets);
		for (var j = 0; j < deleteBullets.length; j++) {
		 	var index = deleteBullets[j];
		 	this.bullets.splice(index, 1);
		}*/

		//console.log(this.bullets.length);
	}
}

//export { Scene };
//export default Scene;