const span = document.querySelectorAll("span")
const sc = document.querySelectorAll(".sidecard")
const tsc = document.querySelectorAll(".top-sidecard")
const csc = document.querySelectorAll(".close-sidecard")
const concept = document.querySelectorAll("p.concept")
var action = 0
var open = 0
var text = 0


for(let i = 0; i < span.length; i++) {
    span[i].addEventListener("click", () => {
        if(open == 0 && action == 0) {
            if(tsc[i].innerText == "") {
                let string = span[i].innerText
                if(string.charAt(0).toUpperCase() != string.charAt(0)) {
                    upperFirstLetter(string)
                }
                tsc[i].innerText = text
            }
            sc[i].appendChild(concept[i])
            sc[i].style.transform = "translateY(-44.7vh)"
            action = 1
            open = 1
            closeSidebar(i)
        }
    })
}

function upperFirstLetter(string) {
    text = string.charAt(0).toUpperCase() + string.slice(1, string.length)
    return text
}

function closeSidebar(i) {
    csc[i].addEventListener("click", () => {
        if(action == 1 && open == 1) {
            sc[i].style.transform = "translateY(44.7vh)"
            open = 0
            action = 0
        }
    })
}