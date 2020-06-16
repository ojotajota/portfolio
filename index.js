// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.


const aluno1 = 'Juscelino'
const notaAluno1 = 9.8

const aluno2 = 'Junior'
const notaAluno2 = 10

const aluno3 = 'fulano'
const notaAluno3 = 2

const media = ((notaAluno1 + notaAluno2 +  notaAluno3) /3)

// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A nota foi de ${media} Parabens`)
}else{
    console.log('A média é menor que 5')
}




