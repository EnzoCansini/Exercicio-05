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
let deixei = 0
console.log(deixei)

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
        if(tela.textContent === "0") {
            tela.textContent = value
        } else {
        tela.textContent += value}
        deixei = 1
        console.log(deixei)
    })
});

operador.forEach(button => {
    button.addEventListener("click", ()=> {
        if(deixei == 1){
        const value = button.textContent

        tela.textContent += value
        deixei = 0
        console.log(deixei)
    } else {
        tela.textContent = tela.textContent.slice(0, -1) || 0
        const value = button.textContent

        tela.textContent += value
        deixei = 0
    }
    })
});

igual.addEventListener("click", ()=> {
    if(deixei == 0){tela.textContent = tela.textContent.slice(0, -1) || 0}
    try{
    const resultado = eval(tela.textContent.replace("X", "*"))
    tela.textContent = resultado
    } catch {
        tela.textContent = "erro"
    } deixei = 1
    })

reset.addEventListener("click", ()=> {
    tela.textContent = 0
})

del.addEventListener("click", ()=> {
    tela.textContent = tela.textContent.slice(0, -1) || 0
})