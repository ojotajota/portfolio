//Cálculo IMC


const nome = 'Juscelino'
const peso = 74
const altura = 1.74
const sexo = "Masculino"

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(nome + " Você está acima do peso")
}else{
    console.log(nome + " você não está acima do peso")
}

