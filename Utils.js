class Vector2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
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