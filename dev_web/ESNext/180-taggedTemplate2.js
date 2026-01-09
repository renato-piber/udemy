function real(parte, ...valores) {
    const resultado = []
    valores.forEach((valor, i) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(parte[i], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`) // 1x de R$29.99 ou 3x de R$11.00