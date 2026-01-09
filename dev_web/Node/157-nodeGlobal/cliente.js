require('./nodeGlobal') // aqui estamos carregando o global

console.log(MinhaApp.saudacao()) // nao é obrigado a colocar o global

MinhaApp.nome = 'eita' // isso é um problema, temos que ter cuidado ao tocar em objetos globais
console.log(MinhaApp.nome)