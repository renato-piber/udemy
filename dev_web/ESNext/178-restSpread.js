// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de funcao

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario} // operador spread espalha as propriedades do objeto funcionario no novo objeto clone
console.log(clone) // { ativo: true, nome: 'Maria', salario: 12348.99 }

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glauco']
const grupoFinal = ['Maria', ...grupoA] // operador spread espalha os elementos do array grupoA no novo array grupoFinal
console.log(grupoFinal) // [ 'Maria', 'João', 'Pedro', 'Glauco' ]

