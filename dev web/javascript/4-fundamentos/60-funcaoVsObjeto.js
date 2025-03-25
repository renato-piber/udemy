console.log(typeof Object); // function
console.log(typeof new Object); // object ==> instanciando uma funcao

const Cliente = function() {}; // function
console.log(typeof Cliente);
console.log(typeof new Cliente); // object ==> instanciando uma funcao

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto); // object ==> instanciando uma funcao