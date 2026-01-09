function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 };
console.log(rand(obj)); // a propria funcao rand faz a operacao de desestruturacao
console.log(rand({ min: 955 })); // passando apenas o minimo
console.log(rand({})); // passando vazio, pega os valores padroes