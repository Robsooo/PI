const main = document.querySelectorAll("main")
const section = document.querySelectorAll("section")
const body = document.querySelector("body")



for (let i = 0; i < main.length; i++) {
    console.log(section[i].children)
    setTransition()
    setValue(i)
    if(section[i].firstElementChild.className == "previous-page") {
        var previous_page = section[i].querySelector("a.previous-page") 
        previous_page.addEventListener("click", () => {
            console.log("Anterior")
            if(main[i].value == 1) {
                main.forEach(div => {
                    div.style.transform = "translateX(0%)"
                })
            } else if(main[i].value == 2) {
                main.forEach(div => {
                    div.style.transform = "translateX(100%)"
                })
            } else if(main[i].value == 3) {
                main.forEach(div => {
                    div.style.transform = "translateX(200%)"
                })   
            }   
        })
    } else if(section[i].lastElementChild.className == "next-page") {
        var next_page = section[i].querySelector("a.next-page")
        next_page.addEventListener("click", () => {
            
            if(main[i].value == 0) {
                main.forEach(div => {
                    console.log("Próxima")
                    div.style.transform = "translateX(-100%)"
                })
            }

            if(main[i].value == 1) {
                main.forEach(div => {
                    console.log("Próxima")
                    div.style.transform = "translateX(-200%)"
                })
            }

            if(main[i].value == 2) {
                main.forEach(div => {
                    div.style.transform = "translateX(-300%)"
                })
            }    
        })
    }
}

function setTransition() {
    main.forEach(div => {
        div.style.transition = "2.5s ease-out"
    })
}

function setValue(i) {
    if(main[i].value == null) {
        main[i].value = i
    } else {
        console.log("Valores de main " + main[i].value + " já definidos")
    }
}
