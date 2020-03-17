class Scene {
	constructor() {
		this.frame = 0;
		this.aux = 0;
		this.bm = new BulletManager(640, 480);
		this.patterns = {};
		this.currentPattern = null;
	}

	start() {
		// Arrow function must be used due to the "this" context being detached
		window.requestAnimationFrame(() => this.draw());
	}

	addPattern(name, callback) {
		this.patterns[name] = callback;
	}

	setCurrentPattern(name) {
		this.currentPattern = this.patterns[name];
	}

	draw() {
		var ctx = document.getElementById('canvas').getContext('2d');

		ctx.clearRect(0, 0, this.bm.width, this.bm.height); // clean canvas

		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, this.bm.width, this.bm.height);

		this.currentPattern(); // Run current bullet pattern

		this.bm.update();

		for (var i = 0; i < this.bm.bullets.length; i++) {
			var x = this.bm.bullets[i].x;
			var y = this.bm.bullets[i].y;

			ctx.fillStyle = "#ff0000";
			ctx.beginPath();
		    ctx.arc(x, y, 6, 0, Math.PI*2);
		    ctx.fill();
		    ctx.closePath();
		}

		this.frame++;

		window.requestAnimationFrame(() => this.draw()); // Repeat
	}
}