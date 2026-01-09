console.log(this === global) // false: this aponta para module.exports
console.log(this === module)
console.log(this === module.exports) // true
console.log(this === exports) // exports aponta para o module.exports tb

// temos que ter cuidado ao acessar o this dentro de uma funcao
function logThis() {
    console.log('dentro de uma funcao...')
    console.log(this === exports) // dentro de uma funcao o exports nao aponta para module.exports
    console.log(this === module.exports) // false tb, pois aponta para a mesma referencia

    console.log(this === global) // true: dentro de uma funcao o this aponta para global (wtf!!!)

    this.perigo = "..." // esta dentro do modulo global
}

this.perigo = "..." // dentro do module.exports
logThis()
