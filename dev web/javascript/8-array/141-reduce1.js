const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual) // aqui ele mostra o acumulador e o atual
    return acumulador + atual // aqui ele soma os dois valores
}, 0) // o segundo parametro é o valor inicial do acumulador, que no caso é 0

console.log(resultado) // aqui ele mostra o resultado final