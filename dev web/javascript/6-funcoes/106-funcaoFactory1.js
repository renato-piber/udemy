// é uma funcao que retorna um objeto, ela fabrica instancias de um objeto
// fazer diversos objetos seria mt demorado
// const prod1 = {
//     nome: '...',
//     preco: 45
// }

// const prod2 = {
//     nome: '...',
//     preco: 1234
// }

// factory simples
function criarPessoa() {
    return {
        nome: 'ana',
        sobrenome: 'silva'
    }
}

console.log(criarPessoa())