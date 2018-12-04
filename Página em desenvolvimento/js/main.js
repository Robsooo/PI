const a = document.querySelectorAll("a.slides")
const footer = document.querySelector("footer") 
// const main = document.querySelectorAll("main")
// const section = document.querySelectorAll("section")

// var t = []

// import { Transition } from "transition.js";

// for(let i = 0; i < main.length; i++) {
//     t[i] = new Transition(main[i])
//     console.log(t[i])
// }

for (let index = 0; index < a.length; index++) {
    var popup = document.createElement("div")
    popup.className = "popup"
    footer.insertBefore(popup, a[index])
}
popup = document.querySelectorAll("div.popup")

for(let i = 0; i < popup.length; i++) {
    if(i == 0) {
        popup[i].innerText = 'Página Inicial'
    } else if(i == 1) {
        popup[i].innerText = 'Introdução'
    } else if(i == 2) {
        popup[i].innerText = 'Dinâmica de Populações'  
    } else if(i == 3) {
        popup[i].innerText = 'Crescimento Populacional'
    } else if(i == 4) {
        popup[i].innerText = 'Interações Ecológicas'
    } else if(i == 5) {
        popup[i].innerText = 'Créditos'
    }
    
    resizePopup(i)
    
    a[i].addEventListener('mouseover', ev => {
        popup[i].style.display = 'block'
        ev.target.style.top = '1vh'
    })
    
    a[i].addEventListener('mouseout', () => {
        popup[i].style.display = 'none'
    })
}

function resizePopup(i){
    if(popup[i].innerText.length > 20) {
        popup[i].style.width = '15vw'
    } else if(popup[i].innerText.length > 22) {
        popup[i].style.width = '17vw'
    }
}
