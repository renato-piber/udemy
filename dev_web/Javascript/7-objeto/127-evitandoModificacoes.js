// Object.preventExtensions
// Não permite adicionar novos atributos ao objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag; // mas pode-se excluir atributos
console.log(produto);

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa); // não permite adicionar nem excluir atributos, mas pode modificar os valores dos atributos
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes
const carro = { marca: 'Ford', modelo: 'Ka' };
Object.freeze(carro); // não permite adicionar, excluir ou modificar atributos