// Arrow Function
const soma = (a, b) => a + b; // sao sempre anonimas e sempre chamam o return implicitamente (caso nao tenha chaves: corpo de funcao)
console.log(soma(2, 3)) // 5

// Arrow Function (this)
const lexico = () => {
    console.log(this === exports) // true, pois o this aponta para o modulo (exports) em arrow function
}
const lexico2 = lexico.bind({}) // bind cria um novo contexto para a funcao, mas o this continua apontando para o modulo (exports)
lexico() // true, pois o this aponta para o modulo (exports)
lexico2() // true, pois o this aponta para o modulo (exports)


// Parametro default
function log(texto = 'Node') { // se nao passar o parametro, o valor padrao sera 'Node'
    console.log(texto)
}
log() // Node
log('sou mais forte')

// Operador Rest ou Spread
function total(...numeros) { // o operador rest transforma os argumentos em um array
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4, 5)) // 15