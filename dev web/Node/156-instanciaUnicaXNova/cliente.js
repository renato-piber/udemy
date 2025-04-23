const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

let contadorC = require('./instanciaNova')()
let contadorD = require('./instanciaNova')()

// mesmo objetos, estamos importando diretamente o obj
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

// objetos diferentes, estamos importando a funcao, nao o seu resultado
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
