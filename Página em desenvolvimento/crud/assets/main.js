const createButton = document.querySelector("input[type=submit]")
const inputs = document.querySelectorAll("form input")

createButton.addEventListener("click", ev=>{
    xhr = new XMLHttpRequest()
    xhr.open(/*"POST"*/, "127.0.0.1/crud/api/delete.php")
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.addEventListener("load", ev=>{

    })
    xhr.send('Nome='+inputs[0].value+'&CPF='+inputs[1].value+'&Login='+inputs[2].value+'&Senha='+inputs[3].value)
})