// o map transforma os dados de um array, criando outro de array com o mesmo tamanho

const nums = [1, 2, 3, 4, 5]

// for com proposito
let resultado = nums.map((n) => n * 2) // a funcao arrow tem um return implicito
console.log(resultado, nums) // [2, 4, 6, 8, 10]

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) 
console.log(resultado)