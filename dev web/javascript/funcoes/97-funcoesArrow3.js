// funcao normal
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

// funcao arrow
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true, chama o modulo atual

// arrow + bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // nao vai mudar a atribuicao do this, a arrow function nao varia o contexto
comparaComThisArrow(module.exports)
