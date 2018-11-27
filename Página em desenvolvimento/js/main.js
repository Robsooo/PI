const a = document.querySelectorAll("a.slides")
const popup = document.querySelectorAll("div.popup")


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
