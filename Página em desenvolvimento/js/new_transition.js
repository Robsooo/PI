class Transition {
    constructor(parent){
        this.parent = parent
        this.div = parent.querySelector("section")
        this.parent.style.transition = "2s ease-in"
    }
    
    changePage() {
        if(this.div.firsChildElement == "a.previous-page") {
            console.log("Entrando")
        } else if(this.div.LastChildElement == "a.next-page") {
            this.div.addEventListener("click", () => {
                console.log("Clicou")
            })
        }
    }
}