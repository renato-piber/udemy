Array.prototype.filter2 = function (callback) {
    let a = []
    for (let i of this) {
        if (callback(i))
            a.push(i)
    }
    return a
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true }, 
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

//forma com arrow function
const preco = p => p.preco >= 500
const fragil = f => f.fragil

console.log(produtos.filter2(preco).filter2(fragil))

