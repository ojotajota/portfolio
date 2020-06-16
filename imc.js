//Cálculo de IMC

const nome = 'Juscelino'
const peso = 74
const altura = 1.74

const imc = peso / (altura * altura)

let message = ""

if (imc >= 30) {
    message = `${nome} você está acima do peso`
} else {
    message = `${nome} você não está acima do peso`
}

console.log(message)