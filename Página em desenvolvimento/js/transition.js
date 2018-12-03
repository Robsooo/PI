const main = document.querySelectorAll("main")
const section = document.querySelectorAll("section")


for (let i = 0; i < main.length; i++) {
    if(section[i].firstElementChild.className == "previous-page") {   
        section[i].firstElementChild.addEventListener("click", () => {
            main[i].style.transform = "translateX(100%)"
            console.log("Entrando no previous")
            main[i-1].style.transform = "translateX(100%)"
        })
    } else if(section[i].lastElementChild.className == "next-page") {
        section[i].lastElementChild.addEventListener("click", () => {
            main[i].style.transform = "translateX(-100%)"
            main[i+1].style.transform = "translateX(-100%)"
            console.log("Entrando no next")
        })
    }
}
