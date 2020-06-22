// Criar um programa que calcula a média
// das turmas de students e envia
// mensagem do cálculo da média.


const classA = [
    {
        name: "Juscelino",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: "Beltrano",
        grade: 10
    }
]

const classB = [
    {
        name: "Cleyton",
        grade: 10
    },
    {
        name: "Robson",
        grade: 10
    },
    {
        name: "Ciclano",
        grade: 2
    },
    {
        name: "Novo Aluno",
        grade: 5
    }
]

function calculateAverage(students) {
    return (students[0].grade + students[1].grade + students[2].grade) / 3
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`The average class ${turma} average: ${average.toFixed(2)}, Congratulations.`)
    } else {
        console.log(`The average class ${turma} is not good enought.`)
    }
}

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')

function markAsFlunked(students) {

}



function sendFlunkedMessage(student) {
    if (student.flunked)
        console.log(`The student ${student.name}, to be flunked.`)
}

function studentsReprovado(students) {
    for (let student of students) {
        student.flunked = false

        if (student.grade < 5) {
            student.flunked = true
        }
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}
studentsReprovado(classA)
studentsReprovado(classB)