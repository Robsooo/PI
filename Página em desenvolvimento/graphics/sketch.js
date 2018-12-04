var funcExpo = (n, r) =>
t =>{
    return n*Math.exp(r*t)
}

var funcLogist = (k, a, r) =>
t => {
    return k / (1 + Math.exp(a-r*t))
}

var funcPreyPop = (d, c, k, a) =>
t => {
    return d/c + k*(d/c) * Math.cos(Math.sqrt(a*d*t))
}

var funcPredPop = (a, b, k, d) =>
t => {
    return a/b + k*(a/b) * Math.sqrt((d/a) * Math.sin(Math.sqrt(a*d*t)))
}

var func
var grafico
const subtitle = document.querySelector("h1").innerText

grafico = new Graphic(document.querySelector("div.graphic"), 100, 90, 5, 1)

switch(subtitle) {
case "Crescimento Exponencial":
    grafico.setSliderFunction("Teste", funcExpo, '#ff0000', [
        grafico.createSlider("População Inicial", true, 0, 100, 1),
        grafico.createSlider("Coeficiente Espontâneo de Crescimento Populacional", true, 0, 5, 0.5)
    ])
break;

case "Crescimento Logístico":
    grafico.setSliderFunction("Teste", funcLogist, '#ff0000', [
        grafico.createSlider("Capacidade de Suporte Máxima", true, 0, 100, 1),
        grafico.createSlider("Constante de Integração", true, 0, 10, 1),
        grafico.createSlider("Coeficiente Espontâneo de Crescimento Populacional", true, 0, 5, 0.5)
    ])
    break;
    
case "População de Presas":
    grafico.setSliderFunction("Teste", funcPreyPop, '#ff0000', [
        grafico.createSlider("Taxa de Mortalidade Natural dos Predadores", true, 0, 100, 1),
        grafico.createSlider("Contribuição de Presas no Crescimento do Número de Predadores", 
            true, 0, 100, 1),
            grafico.createSlider("Taxa de Crescimento Exponencial no número de Presas", true, 0, 
            100, 1),
        grafico.createSlider("Constante de Integração", true, 0, 10, 1)
    ])
    break;
    
    case "População de Predadores":
        grafico.setSliderFunction("Teste", funcPredPop, '#ff0000', [
            grafico.createSlider("Taxa de Crescimento Exponencial no Número de Presas", true, 0, 
            100, 1),
            grafico.createSlider("Eficiência do Predador sobre a Presa", true, 0, 100, 1),
            grafico.createSlider("Constante de Integração", true, 0, 10, 1),
            grafico.createSlider("Taxa de Mortalidade Natural dos Predadores", true, 0, 100, 1)
        ])
    break;
}
    

// PRA CASO DER TUDO ERRADO - MOSTRAR ISSO NO VÍDEO - Aquele css tá mais errado que a minha vida

// grafico = new Graphic(document.querySelector("div.grafico"), 100, 90, 5, 1)

// Crescimento Exponencial

// grafico.setSliderFunction("Teste", funcExpo, '#ff0000', [
//     grafico.createSlider("População Inicial", true, 0, 100, 1),
//     grafico.createSlider("Coeficiente Espontâneo de Crescimento Populacional", true, 0, 5, 0.5)
// ])


// Crescimento Logístico
 
// grafico.setSliderFunction("Teste", funcLogist, '#ff0000', [
//     grafico.createSlider("Capacidade de Suporte Máxima", true, 0, 100, 1),
//     grafico.createSlider("Constante de Integração", true, 0, 10, 1),
//     grafico.createSlider("Coeficiente Espontâneo de Crescimento Populacional", true, 0, 5, 0.5)
// ])


//População de Presas

// grafico.setSliderFunction("Teste", funcPreyPop, '#ff0000', [
//     grafico.createSlider("Taxa de Mortalidade Natural dos Predadores", true, 0, 100, 1),
//     grafico.createSlider("Contribuição de Presas no Crescimento do Número de Predadores", 
//         true, 0, 100, 1),
//     grafico.createSlider("Taxa de Crescimento Exponencial no número de Presas", true, 0, 
//         100, 1),
//     grafico.createSlider("Constante de Integração", true, 0, 10, 1)
// ])

   
// População de Predadores
 
// grafico.setSliderFunction("Teste", funcPredPop, '#ff0000', [
//     grafico.createSlider("Taxa de Crescimento Exponencial no Número de Presas", true, 0, 100, 1),
//     grafico.createSlider("Eficiência do Predador sobre a Presa", true, 0, 100, 1),
//     grafico.createSlider("Constante de Integração", true, 0, 10, 1),
//     grafico.createSlider("Taxa de Mortalidade Natural dos Predadores", true, 0, 100, 1)
// ])


grafico.setLinearRegression("Teste", "#ff0000")