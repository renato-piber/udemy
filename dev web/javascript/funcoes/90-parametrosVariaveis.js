// o parametro ARGUMENTS é um array interno de uma função que tem todos os argumentos que foram passados para ela

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // 0
console.log(soma(1)) // 1
console.log(soma(1.1, 2.2, 3.3)) // 6.6

console.log(soma(1.1, 2.2, "Teste")) // 3.3000000000000003Teste
console.log(soma('a', 'b', 'c')) // 0abc
