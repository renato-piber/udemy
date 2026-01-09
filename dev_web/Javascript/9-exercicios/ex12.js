function removerPropriedade(obj, prop) {
    const objeto = Object.assign({}, obj)
    delete objeto[prop]
    return objeto
}

const obj = { a: 1, b: 2, c: 3 }

console.log(removerPropriedade(obj, "a")) 
console.log(obj)
console.log(Object.is(removerPropriedade(obj, "a"), obj))