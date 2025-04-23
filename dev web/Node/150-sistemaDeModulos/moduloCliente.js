// aqui estamos importando os modulos. oq sera importado é tudo que foi exportado dentro dos modulos
const moduloA = require('./moduloA') // ./ é para acessar um modulo na mesma pasta = caminho relativo 
const moduloB = require('./moduloB') // o padrao de importacao é arquivos .js, apenas arquivos de outras extensoes que precisam ser especificados

console.log(moduloA.ola) // Fala Pessoal!
console.log(moduloA.bemVindo) // Bem Vindo ao Node! 
console.log(moduloA.ateLogo) // Até Logo!
console.log(moduloA)

console.log(moduloB.saudacao) // Fala Pessoal
console.log(moduloB.bemVindo) // Bem Vindo ao Node!
console.log(moduloB.ateLogo) // Até Logo!
console.log(moduloB)
