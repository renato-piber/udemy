const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

// retrospect do objeto == acessar suas informacoes
console.log(Object.keys(pessoa)); // chaves
console.log(Object.values(pessoa)); // valores
console.log(Object.entries(pessoa)); // chave e valor

Object.entries(pessoa).forEach(([chave, valor]) => {  // destructuring
    console.log(`${chave}: ${valor}`);
});

// permite um maior controle das propriedades do objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // pode ser listado
    writable: false, // não pode ser alterado
    value: '01/01/2019'
});

// Object.assing (ECMAScript 2015)
const dest = { a: 1 }; // objeto de destino
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); // concatena os objetos

Object.freeze(obj); // congela o objeto

