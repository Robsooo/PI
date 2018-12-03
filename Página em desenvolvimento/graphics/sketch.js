//funcao 
var funcSegGrau = (a,b,c)=>  
x => {
    return a * x * x + b *x + c
}

//retorna uma função seno em funcao de x com os valores a, b, c e d fornecidos
var funcSeno = (a,b,c,d) => 
x => {
    return a + b * Math.sin( c * x  + d)
}

// funcao de primeiro grau com Currying
var funcPrimGrau  = (a,b) => x => {
    return a*x + b
}

var funcExpo = (n, r) =>
t =>{
    return n*Math.exp(r*t)
}

var funcLogist = (k ,a, r) =>
t => {
    return k / (1 + Math.exp(a-r*t))
}

var funcPreyPop = (d, c, k, a) =>
t => {
    return d/c + k*d/c * Math.cos(Math.sqrt(a*d*t))
}

var funcPredPop = (a, b, k, d) => 
t => {
    return a/b + k*a/b * Math.sqrt((d/a)*Math.sin(Math.sqrt(a*d*t)))
}

var func
var grafico
const subtitle = document.querySelector("h1").innerText

grafico = new Graphic(document.querySelector("div.graphic"), 80, 90, 10, "all")

if(subtitle == "Crescimento Exponencial") {
    grafico.setSliderFunction("Teste", funcExpo, '#ff0000', [
        grafico.createSlider("Número Populacional Inicial", true, 0, 50, 1),
        grafico.createSlider("Taxa de Crescimento Exponencial", true, 0, 10, 5)
    ])
} else if(subtitle == "Crescimento Logístico") { 
    grafico.setSliderFunction("Teste", funcLogist, '#ff0000', [
        grafico.createSlider("Valor de K", true, 0, 10, 1),
        grafico.createSlider("Valor de A", true, 0, 10, 1),
        grafico.createSlider("Valor de R", true, 0, 10, 1)
    ])
} // else if(subtitle == "") { 
//     grafico.setSliderFunction("Teste", funcPreyPop, '#ff0000', [
//         grafico.createSlider("Taxa de Mortalidade dos Predadores", true, 0, 10, 1),
//         grafico.createSlider("Contribuição de Presas no Crescimento de Predadores", true, 0, 10, 1),
//         grafico.createSlider("Constante de Integração", true, 0, 10, 1),
//         grafico.createSlider("Taxa de Crescimento Exponencial de Presas", true, 0, 10, 1)
//     ])
// } else if(subtitle == "") {
//     grafico.setSliderFunction("Teste", funcPredPop, '#ff0000', [
//         grafico.createSlider("Taxa de Crescimento Exponencial de Presas", true, 0, 10, 1),
//         grafico.createSlider("Eficiência do Predador sobre a Presa", true, 0, 10, 1),
//         grafico.createSlider("Constante de Integração", true, 0, 10, 1),
//         grafico.createSlider("Taxa de Mortalidade dos Predadores", true, 0, 10, 1)
//     ])
// } else {
//     grafico.setLinearRegression("Teste", "#ff0000")
//     grafico.setFunction("Oba", x=>{return Math.log(x)},"#ff0000")
// }