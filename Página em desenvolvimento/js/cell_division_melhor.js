var cell
var cells = []
var cytoplasm = []
let directionX
let directionY
var i = 0
var click = 0

function setup() {
    let canvas = createCanvas(300,300)
    canvas.elt.style.width = "85%"
    canvas.elt.style.height = "85%"
    document.querySelector("div.animation").appendChild(canvas.elt)       
    
    frameRate(30)
    
    cells[0] = new Cell(width/2, height/2, 30, 0.8, 1000, 1000)
    cells[0].createCell()

}

function draw() {
    if(click == 1) {
        background(255)
        
        for (i = 0; i < cells.length; i++) {
            cells[i].moveShake()
            cells[i].moveCell()        
        }
    }
}

function mouseClicked() {
    if(mouseX >= 135 && mouseX <= 165 && mouseY >= 135 && mouseY <= 165 && click == 0) {
        click = 1
    } else if(mouseX >= 135 && mouseX <= 165 && mouseY >= 135 && mouseY <= 165 && click == 2) {
        cells.splice(0, cells.length)
        click = 0
        this.setup()
    }
}

class Cell {
    constructor(x, y, wh, v, time_r, time_d) {
        this.x = x
        this.y = y
        this.wh = wh
        this.v = v
        this.time_r = time_r
        this.time_d = time_d
    }

    createCell() {
        cytoplasm = ellipse(this.x, this.y, this.wh)
        stroke(0)
        this.updateDirection()
        return cell = [cytoplasm]
    }
    
    updateDirection() {
        this.directionX = Math.round(random(30, width-30))
        this.directionY = Math.round(random(30, height-30))
    }
    
    moveShake() {
        let shake = [-0.8, 0.8]
        let oldx = this.x
        let oldy = this.y
        this.x += random(shake)
        this.y += random(shake)

        this.updateMove()

        this.x = oldx
        this.y = oldy

        this.updateMove()
    }
    
    moveCell() {
        let w = this.directionX - this.x
        let h = this.directionY - this.y
        let d = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2))
        let vx
        let vy
        
        if(d > 0.5) {
            vx = (this.v * w)/d
            vy = (this.v * h)/d
            
            this.x += vx
            this.y += vy

            if(this.x == this.directionX && this.y == this.directionY) {
                this.updateDirection()
            }

            this.updateMove()
        } else {
            this.updateDirection()
        }

        this.time_r = this.time_r - 5
        
        if(this.time_r < 0) {
            this.division()
            this.time_r = 500
        }
    }

    updateMove() {
        cytoplasm = ellipse(this.x, this.y, this.wh)
        return cell
    }

    distanceX() {
        for(var it = 0; it < 30; it++) {
            var distX = this.x + random(it, -it)
            this.updateMove()
            return distX
        }
    }

    distanceY() {
        for(var it = 0; it < 30; it++) {
            var distY = this.y + random(it, -it)
            this.updateMove()
            return distY
        }
    }
    
    division() {
        if (cells.length < 100) {
            cells.push(new Cell(this.distanceX(), this.distanceY(), this.wh, this.v, 1000, 1000))
            cells[cells.length-1].createCell()

            this.time_d = this.time_d - 350
            
            if(this.time_d <= 0) {
                this.death()
            }
        } else {
            console.log("Máximo de células: " + cells.length)
            click = 2
        }
    }

    death() {
        cells.splice(cells.indexOf(this), 1)
    }

}