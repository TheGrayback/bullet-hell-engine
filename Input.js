var Input = {
	rightPressed: false,
	leftPressed: false,
	upPressed: false,
	downPressed: false,
	spacePressed: false
}

function keyDownHandler(e) {
	if(e.key == "Right" || e.key == "ArrowRight") {
        Input.rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        Input.leftPressed = true;
    }

    if(e.key == "Up" || e.key == "ArrowUp") {
        Input.upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        Input.downPressed = true;
    }

    if (e.key == " ") {
        Input.spacePressed = true;
    }
}

function keyUpHandler(e) {
	if(e.key == "Right" || e.key == "ArrowRight") {
        Input.rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        Input.leftPressed = false;
    }

    if(e.key == "Up" || e.key == "ArrowUp") {
        Input.upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        Input.downPressed = false;
    }

    if (e.key == " ") {
        Input.spacePressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// class Input {
// 	constructor() {
// 		this.rightPressed = false;
// 		this.leftPressed = false;
// 		this.upPressed = false;
// 		this.downPressed = false;
// 		this.spacePressed = false;
// 	}

// 	keyDownHandler(e) {
// 		if(e.key == "Right" || e.key == "ArrowRight") {
// 	        this.rightPressed = true;
// 	    }
// 	    else if(e.key == "Left" || e.key == "ArrowLeft") {
// 	        this.leftPressed = true;
// 	    }

// 	    if(e.key == "Up" || e.key == "ArrowUp") {
// 	        this.upPressed = true;
// 	    }
// 	    else if(e.key == "Down" || e.key == "ArrowDown") {
// 	        this.downPressed = true;
// 	    }

// 	    if (e.key == " ") {
// 	        this.spacePressed = true;
// 	    }
// 	}

// 	keyUpHandler(e) {
// 		if(e.key == "Right" || e.key == "ArrowRight") {
// 	        this.rightPressed = false;
// 	        console.log("right released");
// 	    }
// 	    else if(e.key == "Left" || e.key == "ArrowLeft") {
// 	        this.leftPressed = false;
// 	    }

// 	    if(e.key == "Up" || e.key == "ArrowUp") {
// 	        this.upPressed = false;
// 	    }
// 	    else if(e.key == "Down" || e.key == "ArrowDown") {
// 	        this.downPressed = false;
// 	    }

// 	    if (e.key == " ") {
// 	        this.spacePressed = false;
// 	    }
// 	}
// }

// let input = new Input();

// document.addEventListener("keydown", input.keyDownHandler, false);
// document.addEventListener("keyup", input.keyUpHandler, false);