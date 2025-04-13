function simboloMais(num, str='') {
    if (num === 0) return str
    return num === 1 ? '+' : '+' + simboloMais(num-1, '+')
}

console.log(simboloMais(10))

function simboloMais2(qntd) {
    return Array(qntd).fill('+').join('')
}

console.log(simboloMais2(10))

function simboloMais3(qntd) {
    return '+'.repeat(qntd)
}

console.log(simboloMais3(10))