// a heranca em JS é baseada em prototipos ==> ele vai buscando o mesmo atributo em classes pai
// o prototype so existe em funcao, nao em objeto
// __proto__ é o objeto pai

const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}   

console.log(ferrari.__proto__); // acessa o prototipo do objeto
console.log(ferrari.__proto__ === Object.prototype); // true
console.log(volvo.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);