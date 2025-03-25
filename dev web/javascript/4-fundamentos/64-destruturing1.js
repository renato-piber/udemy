// novo recurso do ES2015, de tirar informações de um objeto ou array

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa; // tire de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade); // Ana 5

const { nome: n, idade: i } = pessoa; // tire de dentro do objeto pessoa os atributos nome e idade e atribua a variaveis n e i
console.log(n, i); // Ana 5

const { sobrenome, bemHumorada = true } = pessoa; // tire de dentro do objeto pessoa os atributos sobrenome e bemHumorada, se não existir sobrenome, a variavel sobrenome será undefined e bemHumorada será true
console.log(sobrenome, bemHumorada); // undefined true

const { endereco: { logradouro, numero, cep } } = pessoa; // tire de dentro do objeto pessoa o atributo endereco e tire de dentro do objeto endereco os atributos logradouro, numero e cep
console.log(logradouro, numero, cep); // Rua ABC 1000 undefined