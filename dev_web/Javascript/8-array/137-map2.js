const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// desafio: retornar um array com apenas os precos

const precos = carrinho.map(json => JSON.parse(json).preco)
console.log(precos)