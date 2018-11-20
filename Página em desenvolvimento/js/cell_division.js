var cells
var x = []
var stop = 0
var flag

function setup() {
	let canvas = createCanvas(300,300)
	canvas.elt.style.width = "80%"
	canvas.elt.style.height = "80%"
	document.querySelector("div.animation").appendChild(canvas.elt)
	frameRate(60)

	stroke(0)
	strokeWeight(3)
	c1 = new Cell(width/2, height/4, 50)
	c1.createCell()
	ellipse(width/2, height/4, 25)
	c2 = new Cell(width/2, height/4, 50)
	c2.createCell()
	ellipse(width/2, height/4, 25)
	c3 = new Cell(width/2, height/4, 50)
	c3.createCell()
	ellipse(width/2, height/4, 25)
	
	for (var i = 0; i < 2; i++) {
		x[i] = 150
	}
}

function draw() {
	stroke(0)
	strokeWeight(3)
	
	if(flag == false) {
		background(255)
		c2.division()
		c3.division()
	}
}

function mouseClicked() {
	if(stop < 1 && mouseX > 0 && mouseY > 0 && mouseX <= width && mouseY <= width && mouseX <= height && 
		mouseY <= height) {
		stop = 1
		flag = false
		setup()
		draw()
	}

}

class Cell {
	constructor(x, y, wh) {
		this.x = x
		this.y = y
		this.wh = wh
	}

	createCell() {
		return cells = ellipse(this.x, this.y, this.wh)
	}

	division() {
		c2.cells = ellipse(x[0]--, this.y++, this.wh)
		ellipse(x[0]--, this.y++, this.wh/2)
		c3.cells = ellipse(x[1]++, this.y++, this.wh)
		ellipse(x[1]++, this.y++, this.wh/2)

		if(this.y >= height/2 || x[0] == width/4 || x[1] == width - (width/4)) {
			flag = true
			console.log("1º x:" + x[0])
			console.log("2º x:" + x[1])
			console.log("1º x:" + this.y)
			if (this.y == 151 && x[0] == 74 && x[1] == 226) {
				console.log("Ta entrando no if final")
				stop = 0
			}
		}
	}
}