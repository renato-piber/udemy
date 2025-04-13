const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.2},
]

// Imperativo ==> foca no como fazer, ensinar cada detalha/passo
// o codigo fica mais implicito, mais verboso, mais detalhado
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo => foca no reuso de codigo, foca no que fazer, nao no como
// é deixar a linguagem resolver pra mim os problemas
// sql é Declarativo
const getNota = aluno => aluno.nota
const soma = (a, b) => a + b
total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)