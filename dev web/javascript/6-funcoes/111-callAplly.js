// a diferenca entre o call e o aplly esta na forma que é passada os parametros
// é tipo uma funcao bind, mas associada a funcao e nao ao objeto

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // NaN, pois no contexto lexico da funcao, os valores nao estao acessiveis
console.log(produto.getPreco()) // R$ 3900.65

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // R$ 39992 -> atrubui o contexto do objeto carro para a funcao getPreco
console.log(getPreco.apply(carro)) // R$ 39992 -> mesma coisa do call, mas os parametros sao passados de forma diferente

console.log(getPreco.call(carro, 0.17, '$')) // $ 46790.64, passa os parametros imposto e moeda
console.log(getPreco.apply(carro, [0.17, '$'])) // $ 46790.64, passa os parametros imposto e moeda em um array