Array.prototype.map2 = function(callback) {
    let novoArray = [];
    for(let i of this)
        novoArray.push(callback(i))
    
    return novoArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// desafio: retornar um array com apenas os precos

const precos = carrinho.map2(json => JSON.parse(json).preco)
console.log(precos)