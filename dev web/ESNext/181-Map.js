// é tipo um objeto (uma estrutura de dados chave-valor), mas que permite maior flexibilidade em relacao a chaves e valores

const tecnologia = new Map()
tecnologia.set('React', { framework: false })
tecnologia.set('Angular', { framework: true })

console.log(tecnologia.react) // undefined
console.log(tecnologia.get('React').framework) // false

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) // true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // false
console.log(chavesVariadas.size) // mostra o tamanho do map

chavesVariadas.set(123, 'Número') 
chavesVariadas.set(123, 'Número') // o map nao aceita chaves duplicadas, mas aceita valores duplicados
chavesVariadas.set(456, 'Número') 
console.log(chavesVariadas.size) 