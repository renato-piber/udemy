/*
é uma discussao conceitual:
existe atribuição por valor e atribuição por referencia
    -referencia: o valor é o endereco de memoria do objeto;
    -valor: o valor é o proprio valor do objeto, como no caso de tipos primitivos (string, number, boolean, null, undefined, symbol)
*/

// atriubicao por referencia
const a = {name: 'teste'}; // atribuição por referencia  
// a constante 'a' nao possui o valor do objeto, mas sim a referencia para o objeto

const b = a; // atribuição por referencia, pois possui o mesmo endereco de 'a'
b.name = 'opa'; // altera o valor do objeto que 'a' e 'b' referenciam (elas possuem o mesmo endereco)

// atribuição por valor
let c = 3; // atribuição por "copia" do valor 
let d = c; // atribuição por "copia" do valor
d++; // altera o valor de 'd', mas nao altera o valor de 'c'

//-----------------------------------------
// null e undefined

let valor; // undefined / nao inicializada
console.log(valor); // undefined, ela nao possui nenhuma declaracao
// defined != undefined
valor = null; // null / ausencia de valor ==> foi inicializada mas nao possui valor, nao aponta para nenhum endereco de memoria
console.log(valor); // null
// console.log(valor.toString()); // erro, nao é possivel acessar nada de algo q esta null ou undefined

const produto = {};
console.log(produto.preco); // undefined
console.log(produto); // {}
produto.preco = 3.50; // atribui um valor ao preco
console.log(produto); // { preco: 3.50 }

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco); // false ==> undefined é false
console.log(produto);
//delete produto.preco; // deleta o atributo preco
produto.preco = null;
console.log(produto); // {}

console.log(!!produto.preco); // false ==> null é false