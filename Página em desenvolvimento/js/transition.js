const main = document.querySelectorAll("main")
const section = document.querySelectorAll("section")


function setPosition() {
    for(let i = 1 ;i < main.length; i++) {
        main[i].style.display = "none"
        main[i].style.transform = "translateX(100%)"
        i++
    }
}

function changePage(i) {
    if(section[i].children[0].className == "previous-page") {
        console.log("true")
        section[i].children[0].addEventListener("click", () => {
            main[i-1].style.transform = "translateX(-100%)"
            main[i].style.transform = "translateX(100%)"
            main[i-1].style.display = "flex"
        })
    } else if(section[i].children[section.length].className == "next-page"){
        section[i].children[section.length].addEventListener("click", () => {
            main[i].style.transform = "translateX(-100%)"
            main[i+1].style.transform = "tranlateX(-100%)"
            main[i+1].style.display = "flex"
        })
    }
}

(function() {
    for (let index = 0; index < main.length; index++) {
        setPosition()
        changePage(index)
    }
})()