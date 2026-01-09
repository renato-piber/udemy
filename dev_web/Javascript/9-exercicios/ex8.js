// usando loops
const multiplicar = (x, y) => {
    let resultado = 0;
    for (let i = 0; i < y; i++) {
        resultado += x
    }
    return resultado
}

console.log(multiplicar(3, 2))

// usando funcoes recursivas
function multiplicarRecursiva(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0

    return multiplicador === 1 ? numero : numero + multiplicarRecursiva(numero, multiplicador - 1)
}


console.log(multiplicarRecursiva(3, 3))

// nessa versao de chamada recursiva ja esta bom, mas ainda para reduzir o numero de chamadas recursivas, definindo o multiplicador como o menor numero:

function multiplicar2(num1, num2) {
    if (num1 === 0 || num2 === 0) return 0

    const maior = Math.max(num1, num2)
    const menor = Math.min(num1, num2)

    function multiplicarRecursiva2(numero, multiplicador) {
        return multiplicador === 1 ? numero : numero + multiplicarRecursiva2(numero, multiplicador - 1)
    }

    return multiplicarRecursiva2(maior, menor)
}


console.log(multiplicar2(3, 3))