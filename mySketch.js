var balls = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 6; i++) {
		balls.push(new Ball(random(width), random(height), 80, random(-5, 5), random(-5, 5)))
	}
}

function draw() {
	background(255, 109, 189);

	for (let i = 0; i < balls.length; i++) {
		balls[i].move();
		balls[i].bounce();
		balls[i].display();
	}
}

class Ball {

	constructor(x, y, w, speedx, speedy) {
		this.x = x;
		this.y = y
		this.w = w;
		let ranx = random(-1, 1);
		let rany = random(-1, 1);
		if (ranx < 0) {
			let speedx	= 7;
		} else {
			let speedx = -7;
		}
		if (rany > 0) {
			let speedx	= 7;
		} else {
			let speedx = -7;
		}
		this.speedx = speedx;
		this.speedy = speedy;
	}

	move() {
		this.x = this.x + this.speedx;
		this.y = this.y + this.speedy;
	}

	bounce() {
		if (this.x >= width - this.w/2 || this.x <= this.w/2) {
			this.speedx = this.speedx * -1
		}

		if (this.y >= height - this.w/2 || this.y <= this.w/2) {
			this.speedy = this.speedy * -1
		}
	}

	display() {
		fill(0);
		ellipse(this.x, this.y, this.w, this.w);
	}
}

const audio = document.getElementById("myAudio");
const progress = document.querySelector(".progress");
const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

audio.addEventListener("timeupdate", () => {
  const height = (audio.currentTime / audio.duration) * 100;
  progress.style.height = `${height}%`;
});

