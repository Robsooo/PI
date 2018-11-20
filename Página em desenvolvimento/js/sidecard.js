const word = document.querySelectorAll("i")
const sc = document.querySelectorAll(".sidecard")
const tsc = document.querySelectorAll(".top-sidecard")
const csc = document.querySelectorAll(".close-sidecard")
const conceito = document.querySelectorAll("p.conceito")
var click = 0
var open = 0
var text = 0

// Scripts conflitando, quando aciona o sidecard, a animação se ativa - RESOLVER ISSO
// Decidir se boto o sidecard em cima do footer ou se eu tento sobrepôr o sidecard sobre o footer

for(let i = 0; i < i.length; i++) {
    word[i].addEventListener('click', () => {
        if(open == 0 && click == 0) {
            if(tsc[i].innerText == "") {
                let string = i[i].innerText
                if(string.charAt(0).toUpperCase() != string.charAt(0)) {
                    upperFirstLetter(string)
                }
                tsc[i].innerText = text
            }
            sc[i].appendChild(conceito[i])
            sc[i].style.transform = "translateY(-29.7vh)"
            click = 1
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
    csc[i].addEventListener('click', () => {
        if(click == 1 && open == 1) {
            sc[i].style.transform = "translateY(29.7vh)"
            open = 0
            click = 0
        }
    })
}