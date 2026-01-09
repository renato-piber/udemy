console.log(module.exports === this)
console.log(module.exports === exports)

// formas de exportas modulos
this.a = 1
exports.b = 2
module.exports.c = 3 // o module.exports é o objeto que será exportado, e o exports é uma referencia a esse objeto. Se eu mudar o exports, o module.exports continua o mesmo, mas se eu mudar o module.exports, o exports continua o mesmo. Por isso, é melhor usar o module.exports para exportar objetos ou funções.

exports = null // isso aqui não vai funcionar, pois o exports é uma putra variavel que aponta para module.exports
console.log(module.exports) // { a: 1, b: 2, c: 3 } // o module.exports é o objeto que será exportado, e o exports é uma referencia a esse objeto. Se eu mudar o exports, o module.exports continua o mesmo, mas se eu mudar o module.exports, o exports continua o mesmo. Por isso, é melhor usar o module.exports para exportar objetos ou funções.

// aqui estamos apenas mudando a referencia do exports, mas o module.exports continua o mesmo
exports = { 
    nome: 'Teste'
}
console.log(module.exports) // no fim, oq sera exportado é module.exports