// na execucao em node cada arquivo é um modulo => browser x node
// é necessario entender o runtime do js

let a = 3;

global.b = 123;
this.c = 456; 

console.log(a); // 3
console.log(global.b); // 123 
console.log(this.c); // 456
console.log(module.exports.c); // 456
console.log(module.exports === this); // true
console.log(module.exports); // { c: 456 }

module.exports = { e: 456, f: false, g: 'teste' }; // mudando a referencia de this para o objeto exportado

// criando uma variavel maluca: sem var e let
abc = 3; // não faça isso, ela esta diretamente no objeto global (Node)
console.log(global.abc); // 3