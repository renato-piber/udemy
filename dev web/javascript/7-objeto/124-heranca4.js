function MeuObjeto() {}
console.log(MeuObjeto.prototype) // {}
// __proto__ é um atributo que aponta para o prototipo do objeto

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // true => os prototipos de dois objetos criados a partir da mesma funcao sao iguais
console.log(MeuObjeto.prototype === obj1.__proto__) // true => o prototipo do objeto criado a partir de uma funcao construtora é a funcao.prototype

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumo:
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
console.log(MeuObjeto.__proto__ === Function.prototype) // true, para objetos criados a partir de funcoes construtoras
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true, Object.prototype é o objeto de mais alto nivel em JS
