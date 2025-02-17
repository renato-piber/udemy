function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 28919.00))
console.log(criarProduto('celular', 1231.00))
