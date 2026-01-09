const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]
// forma enxuta
console.log(produtos.filter(function(p) {
    return p.preco >= 500 && p.fragil === true // na funcao filter o retorno é true ou false
}))

//forma com arrow function
const preco = p => p.preco >= 500
const fragil = f => f.fragil

console.log(produtos.filter(preco).filter(fragil))

