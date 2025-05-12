// é uma estrutura que nao aceita repeticao e nao é indexada
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('Fluminense').add('Vasco') // o set nao aceita repeticao

console.log(times) // Set(3) { 'Vasco', 'Flamengo', 'Fluminense' }
console.log(times.size) // 3
console.log(times.has('Vasco')) // true
console.log(times.has('vasco')) // false
times.delete('Flamengo')
console.log(times.has('Flamengo')) // false

// criando um set a partir de um array
const nomes = ['Raquel', 'Lucas', 'Ana', 'Lucas']
const nomesSet = new Set(nomes) // transforma o array em um set, eliminando os duplicados *******DICA
console.log(nomesSet) // Set(3) { 'Raquel', 'Lucas', 'Ana' }