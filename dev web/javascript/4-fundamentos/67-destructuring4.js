function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])); // passando min e max
console.log(rand([992])); // passando apenas o minimo
console.log(rand([, 10])); // passando apenas o maximo
console.log(rand([])); // passando vazio, pega os valores padroes
