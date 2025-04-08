// gerar um objeto a partir de um array
const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) }, // Object.values retorna os valores do objeto
    enumerable: false // não vai aparecer na listagem de propriedades do objeto
})

console.log(quaseArray[0])


const meuArray = ['Rafael', 'Ana', 'Bia']

console.log(quaseArray.toString(), meuArray) 