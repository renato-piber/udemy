const sequence = { // objeto que simula um banco de dados, criand ids para os produtos
    _id: 1,
    get id() { return this._id++ },

}

const produtos = {} // objeto de objetos

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id // se o produto não tiver um id, atribui um novo id a ele
    produtos[produto.id] = produto // adiciona o produto ao objeto produtos, usando o id como chave
    return produto // retorna o produto
}

function getProduto(id) {
    return produtos[id] || {} // retorna o produto com o id especificado, ou um objeto vazio se não existir
}

function getProdutos() { // retorna todos os produtos
    return Object.values(produtos) // retorna os valores do objeto produtos como um array
}

function excluirProduto(id) { // exclui um produto com o id especificado
    const produto = produtos[id] // armazena o produto a ser excluido
    delete produtos[id]
    return produto
}

module.exports = { // exporta as funções e o objeto produtos para serem usados em outros arquivos
    salvarProduto,
    getProduto,
    getProdutos,
    excluirProduto
}