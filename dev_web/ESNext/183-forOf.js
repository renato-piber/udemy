// em quanto o for in itera sobre os indices, o for of itera sobre os valores
// of
for (let letra of 'Cod3r') {
    console.log(letra) // C o d 3 r
}

// in
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) {
    console.log(i) // 0 1 2
}

// of
for (let i in assuntosEcma) {
    console.log(assuntosEcma[i]) // Map Set Promise
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

// of sobre uma matriz
for (let assunto of assuntosMap) {
    console.log(assunto) // [ 'Map', { abordado: true } ] [ 'Set', { abordado: true } ] [ 'Promise', { abordado: false } ]
}   

// of sobre as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave) 
} 

// of sobre os valores
for (let valores of assuntosMap.values()) {
    console.log(valores) 
} 

// of sobre as entradas (chave e valor)
for (let [chave, valor] of assuntosMap.entries()) { // desestruturando o array
    console.log(chave, valor)  
}




const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra) // a b c
}