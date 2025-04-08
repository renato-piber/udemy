const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() // elimina o ultimo valor do array
console.log(pilotos); // ['Vettel', 'Alonso', 'Raikkonen']

pilotos.push('Verstappen') // adiciona um novo valor no final do array
console.log(pilotos); // ['Vettel', 'Alonso', 'Raikkonen', 'Verstappen']

pilotos.shift() // elimina o primeiro valor do array
console.log(pilotos)

pilotos.unshift('Hamilton') // é o contraio do do shift, ao inves de retirar da 1 posicao, ele adiciona
console.log(pilotos)

// splice()
// adiciona
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // é tipo o list comprehesion
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // o segundo parametro é exclusivo