// um array é um objeto, mas é tipo uma lista
// o array é pode receber uma gama heterogenea de valores, isso nao e recomendado
console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // forma literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo' // adicionando um elemento no array
aprovados.push({ nome: 'Rafael' }, false, null, 'Ana')
console.log(aprovados.length) // length mostra o tamanho do array

aprovados[15] = 'Rafael' // adicionando um elemento no array em uma posicao que nao existe

console.log(aprovados[8] === undefined) // o valor da posicao 8 e undefined

aprovados.sort() // ordena o array em si

delete aprovados[1] // deleta o elemento da posicao 1, mas a posicao continua existindo
console.log(aprovados[1]) 
console.log(aprovados) 

// ---------------------------------------
aprovados = ['Bia', 'Carlos', 'Ana'] // forma literal
aprovados.splice(1, 1) // com a funcao splice é possivel tirar ou colcoar dados em um array. nesse caso esta retirando. o primeiro parametro é o indice de onde começa a retirar e o segundo é o indice de onde termina. nesse caso ele vai retirar o elemento 1, mas não vai incluir o 2. ou seja, ele vai retirar o elemento 1 e não vai incluir o 2.
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, '1', '2') // agora nesse caso estamos inserindo dois novos elementos: 1 e 2
console.log(aprovados)
