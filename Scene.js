class Scene {
	constructor() {
		this.frame = 0;
		this.aux = 0;
		this.bm = new BulletManager(SCREEN_WIDTH, SCREEN_HEIGHT);
		this.patterns = {};
		this.currentPattern = null;

		this.bulletRadius = 8;

		// this.input = new Input();

		// document.addEventListener("keydown", () => this.input.keyDownHandler(), false);
		// document.addEventListener("keyup", () => this.input.keyUpHandler(), false);

		this.player = new Player();
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
		this.player.update();

		this.player.collisioning = this.bm.bulletCollision(this.player.x, this.player.y, 4, this.bulletRadius);

		// Draw bullets
		for (var i = 0; i < this.bm.bullets.length; i++) {
			var x = this.bm.bullets[i].x;
			var y = this.bm.bullets[i].y;

			ctx.fillStyle = "#ff0000";
			ctx.beginPath();
		    ctx.arc(x, y, this.bulletRadius, 0, Math.PI*2);
		    ctx.fill();
		    ctx.closePath();
		}

		for (var i = 0; i < this.bm.bullets.length; i++) {
			var x = this.bm.bullets[i].x;
			var y = this.bm.bullets[i].y;

			ctx.fillStyle = "#ffffff";
			ctx.beginPath();
		    ctx.arc(x, y, this.bulletRadius-2, 0, Math.PI*2);
		    ctx.fill();
		    ctx.closePath();
		}

		this.player.draw(ctx);

		this.frame++;

		window.requestAnimationFrame(() => this.draw()); // Repeat
	}
}