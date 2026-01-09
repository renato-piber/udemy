// JSON => Javascript Object Notation, formato de dados que é usado para interoperabilidade entre sistemas
// JSON é um formato textual, ou seja, é uma string que representa um objeto

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } };
console.log(JSON.stringify(obj)); // transforma o objeto em JSON, assim ele exclui a funcao soma()

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")); // nao é um formato valido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")); // nao é um formato valido, o nome dos atributos deve ser delimitado por aspas duplas ""
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')); // transforma o JSON em objeto
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')); // transforma o JSON em objeto