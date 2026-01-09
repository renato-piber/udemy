const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// todos os alunos sao bolsistas?
let resposta = alunos.map(aluno => aluno.bolsista).reduce((x, y) => x && y) 
console.log(resposta)


// algum aluno e bolsista
resposta = alunos.map(aluno => aluno.bolsista).reduce((x, y) => x || y) 
console.log(resposta)