document.body.classList.add(`theme-1`)

const toggle = document.querySelector(".theme-toggle")
const body = document.body

let temaAtual = 1

toggle.addEventListener("click", ()=> {
    temaAtual++
    if(temaAtual > 3){
        temaAtual = 1} 
        body.className = `theme-${temaAtual}`;
})

const key = document.querySelectorAll(".key")
const numero = document.querySelectorAll(".number")
const operador = document.querySelectorAll(".operator")
const igual = document.querySelector(".equals")
const del = document.querySelector(".action")
const reset = document.querySelector(".span-2")
const tela = document.querySelector(".result")
let limpar = 0


operador.forEach(button => {
    button.addEventListener("click", ()=> {
        if(limpar == 1) {
            limpar = 0
        }
    })
})

numero.forEach(button => {
    button.addEventListener("click", ()=> {
        if(limpar == 1) {''
            tela.textContent = 0
            limpar = 0
        }
    })
})

key.forEach(button => {
    button.addEventListener("click", ()=> {
        if(tela.textContent === "NaN" || tela.textContent === "erro" || tela.textContent === "Infinity") {
            tela.textContent = 0
        }
    })
})

numero.forEach(button => {
    button.addEventListener("click", ()=> {
        const value = button.textContent
        if (value == '.'){
            const ultimo = tela.textContent.slice(-1)
            if(ultimo == 'X' || ultimo == '/' || ultimo == '+' || ultimo == '-' || ultimo == '.') {
                tela.textContent = tela.textContent.slice(0, -1) || 0
                tela.textContent += value
            } else {
                tela.textContent += value
            }
        } else{
        if(tela.textContent === "0") {
            tela.textContent = value
        } else {
        tela.textContent += value} 
        } 
    })
});

operador.forEach(button => {
    button.addEventListener("click", ()=> {
        const value = button.textContent
        const ultimo = tela.textContent.slice(-1)
        console.log(ultimo)
if(ultimo == 'X' || ultimo == '/' || ultimo == '+' || ultimo == '-' || ultimo == '.'){
        tela.textContent = tela.textContent.slice(0, -1) || 0
        tela.textContent += value
} else {
        tela.textContent += value
}
    })
});

igual.addEventListener("click", ()=> {
const ultimo = tela.textContent.slice(-1)
if(ultimo == 'X' || ultimo == '/' || ultimo == '+' || ultimo == '-' || ultimo == '.'){tela.textContent = tela.textContent.slice(0, -1) || 0}
    try{
    const resultado = eval(tela.textContent.replace("X", "*"))
    tela.textContent = resultado
    } catch {
        tela.textContent = "erro"
    }
    limpar = 1
    })

reset.addEventListener("click", ()=> {
    tela.textContent = 0
})

del.addEventListener("click", ()=> {
    tela.textContent = tela.textContent.slice(0, -1) || 0
})