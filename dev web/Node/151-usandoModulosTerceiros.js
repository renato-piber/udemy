// nesta aula comecamos instalando o modulo lodash com o comando: npm i lodash
// tb a uma "hierarquia" de busca de modulos

const _ = require('lodash') // o _ é uma convenção para o lodash, mas poderia ser qualquer nome
// aqui nao precisou especificar o caminho, pois o node procura na pasta node_modules, que é onde ficam os modulos instalados, nesses modulos é que a importacao acontece
setInterval(() => {
    console.log(_.random(1, 1000)) // aqui estamos usando o lodash para gerar um numero aleatorio entre 1 e 1000
}, 2000)

// em seguida instalamos o nodemon de forma global
// esse modulo pega sempre o arquivo mais atual e fica executando sem parar