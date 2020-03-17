let scene = new Scene();

// TODO The patterns should be instantiated from a factory class

scene.addPattern('pattern1', function() {
	if (this.frame % 15 == 0) {
		var x = getRandomInt(40, 600);
		var y = getRandomInt(40, 50);
		var speed = getRandomInt(2, 4);

		for (var i = 0; i < 50; i++) {
			this.bm.addBullet(x, y, i*360/50, speed);
		}
	}
});

scene.addPattern('pattern2', function() {
	if (this.frame % 30 == 0) {
		var x = getRandomInt(40, 600);
		var y = getRandomInt(40, 50);
		var speed = getRandomInt(2, 4);

		for (var i = 0; i < 100; i++) {
			this.bm.addBullet(x, y, i*360/100, 4);
		}
	}
});

scene.addPattern('pattern3', function() {
	if (this.frame % 10 == 0) {
		this.aux += 10;
		var x = getRandomInt(40, 600);
		var y = getRandomInt(40, 50);

		for (var i = 0; i < 12; i++) {
			for (var j = 2; j < 5; j++) {
				this.bm.addBullet(this.aux, 50, i*360/12 - this.aux/2, j/10+1);
			}
		}
	}

	if (this.aux >= this.bm.width) this.aux = 0;
});

scene.addPattern('pattern4', function() {
	if (this.frame % 10 == 0) {
		this.aux += 10;
		var x = getRandomInt(40, 600);
		var y = getRandomInt(40, 50);

		for (var i = 0; i < 6; i++) {
			for (var j = 2; j < 10; j++) {
				this.bm.addBullet(this.aux, 50, i*360/6 - this.aux/2, j/10+1);
			}
		}
	}

	if (this.aux >= this.bm.width) this.aux = 0;
});

scene.setCurrentPattern('pattern1');

scene.start();