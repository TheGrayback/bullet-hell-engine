//import Scene from './Scene.js';
//import Bullet from './Bullet.js';

let bm = new BulletManager(640, 480);

window.requestAnimationFrame(draw);

//console.log(bm);

var frame = 0; // counts all the frames
var aux = 0; // it's used for some calculations

var bulletPattern1 = function() {
	if (frame % 15 == 0) {
		var x = getRandomInt(40, 600);
		var y = getRandomInt(40, 50);
		var speed = getRandomInt(2, 4);

		for (var i = 0; i < 50; i++) {
			bm.addBullet(x, y, i*360/50, speed);
		}
	}
}

var bulletPattern2 = function() {
	if (frame % 30 == 0) {
		var x = getRandomInt(40, 600);
		var y = getRandomInt(40, 50);
		var speed = getRandomInt(2, 4);

		for (var i = 0; i < 100; i++) {
			bm.addBullet(x, y, i*360/100, 4);
		}
	}
}

var bulletPattern3 = function() {
	if (frame % 10 == 0) {
		aux += 10;
		var x = getRandomInt(40, 600);
		var y = getRandomInt(40, 50);

		for (var i = 0; i < 12; i++) {
			for (var j = 2; j < 5; j++) {
				bm.addBullet(aux, 50, i*360/12 - aux/2, j/10+1);
			}
		}
	}

	if (aux >= bm.width) aux = 0;
}

var bulletPattern4 = function() {
	if (frame % 10 == 0) {
		aux += 10;
		var x = getRandomInt(40, 600);
		var y = getRandomInt(40, 50);

		for (var i = 0; i < 6; i++) {
			for (var j = 2; j < 10; j++) {
				bm.addBullet(aux, 50, i*360/6 - aux/2, j/10+1);
			}
		}
	}

	if (aux >= bm.width) aux = 0;
}

var currentPattern = bulletPattern1;

function draw() {
	var ctx = document.getElementById('canvas').getContext('2d');

	//ctx.globalCompositeOperation = 'destination-over';
	ctx.clearRect(0, 0, bm.width, bm.height); // limpiar canvas

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, bm.width, bm.height);

	currentPattern();

	bm.update();

	for (var i = 0; i < bm.bullets.length; i++) {
		var x = bm.bullets[i].x;
		var y = bm.bullets[i].y;

		ctx.fillStyle = "#ff0000";
		ctx.beginPath();
	    ctx.arc(x, y, 6, 0, Math.PI*2);
	    ctx.fill();
	    ctx.closePath();
	}

	frame++;

	window.requestAnimationFrame(draw);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function fullscreen() {
    var elem = document.getElementById("canvas");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
}