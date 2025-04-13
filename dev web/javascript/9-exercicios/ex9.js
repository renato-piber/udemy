function repetir (valor, repetidor) {
    let array = []
    for (let i = 0; i < repetidor; i++) {
        array.push(valor)
    }
    return array
}

console.log(repetir('c', 2).join(''), 'kkkk')
console.log(repetir(7, 3))


function repertir2 (item, qntd) {
    return Array(qntd).fill(item)
}

console.log(repertir2('c', 10))