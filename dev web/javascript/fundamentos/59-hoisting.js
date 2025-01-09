// hoisting == elevacao

// o interpretador le assim:
// var x;    // Declaração "elevada"
// console.log(x); // undefined
// x = 5;    // Inicialização permanece onde está


console.log('a =', a); // undefined
var a = 2; // a variavel com var, ela é elevada para o topo do escopo, ela é declarada antes de tudo, mas nao atribuida
console.log('a =', a); // 2

console.log('b =', b); // ReferenceError: Cannot access 'b' before initialization
let b = 2; // a variavel com let, ela não é elevada para o topo do escopo, ela é executada depois de tudo
console.log('b =', b); // 2