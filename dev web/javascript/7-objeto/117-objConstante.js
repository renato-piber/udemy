// pessoa -> 123 -> {...}
// o CONST preserva apenas a referencia da variavel, mas os dados ainda podems ser alterados
const pessoa = {nome: pessoa};
pessoa.nome = 'pedro';
console.log(pessoa);


// pessoa -> 456 -> {...} 
// aqui estamos alterando o local da memoria
//pessoa = {nome: 'ana'};

Object.freeze(pessoa); // congela o objeto, nao é mais possivel alterar, inserir ou deletar suas informacoes



const pessoaConstante = Object.freeze({nome: 'joao'}); // aqui o objeto ja nasce imutavel