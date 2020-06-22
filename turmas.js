// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média.


const alunosDaTurmaA = [
    {
        nome:"Juscelino",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    },
    {
        nome: "Beltrano",
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome:"Cleyton",
        nota: 10
    },
    {
        nome: "Robson",
        nota: 10
    },
    {
        nome: "Ciclano",
        nota: 2
    },
    {
        nome: "Novo Aluno",
        nota: 5
    }
]

function calculaMedia(alunos){
    return (alunos [0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A meédia da turma ${turma} foi de ${media.toFixed(2)}, Parabéns.`)
    } else {
        console.log('A média da turma ${turma} é menor que 5')
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

function marcarAlunoReprovado(aluno){
    for (let aluno of alunos){
        aluno.reprovado = false;
        if (aluno.nota <5) {
            aluno.reprovado = true;
        }
    }
    console.table(alunos)
}