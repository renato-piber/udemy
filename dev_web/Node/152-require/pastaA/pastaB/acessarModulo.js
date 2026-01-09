// sempre é bom respeitar letras maiusculas e minusculas dos caminhos, pois os sistemas linux diferenciam letras maiusculas de minusculas
const moduloA = require('../../../150-sistemaDeModulos/moduloA') // ./ é para acessar um modulo na mesma pasta
// ../ é para acessar um modulo na pasta acima
console.log(moduloA.ola) // chamando a função ola do moduloA

// caminho absoluto
const moduloA2 = require('C:\\Users\\renat\\OneDrive\\Documentos\\cursos\\udemy\\dev web\\Node\\150-sistemaDeModulos\\moduloA.js')
console.log(moduloA2.ola)

// como acessar os modulos dentro da pasta node_modules? assim:
const saudacao = require('saudacao') // so cuidar pq o node procura pelo arquivo "index.js" dentro dos modulos. Se o arquivo index nao existir... da erro :')
saudacao.ola() 

// --------------------------------
// como o padrao é o index.js, nao é necessario colocar o index.js no caminho, mas se quiser pode colocar
const c = require('./pastaC'/*/index'*/) // ./ é para acessar um modulo na mesma pasta
c.ola()
// uma outra dica é utilizar apenas um arquivo dedicado para todas as importacoes, e ao acessar ele, receber um objeto com todas as importacoes
// --------------------------------
const http = require('http') // modulo nativo do node, que permite criar um servidor http
http.createServer((req, res) => { // req = requisicao, res = resposta
    res.write('Olá, Mundo!') // escreve a resposta
    res.end() // finaliza a resposta
}).listen(8080)