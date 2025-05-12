// let e const 
{
    var a = 1;
    let b = 2;
}

console.log(a) // 1, pois var "nao respeita" escopo de bloco
//console.log(b) // not defined

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'coder'
console.log(l, e, tras) // c o [d, e, r]

const [x, y] = [1, 2, 3]
console.log(x, y) // 1 2

const { nome:n, idade } = { nome: 'Ana', idade: 23 }
console.log(n, idade) // Ana 23

