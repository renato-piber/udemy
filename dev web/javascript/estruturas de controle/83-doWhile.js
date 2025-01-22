function getInteiroAleatoriaEntre (min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao; // nao e necessaria inicializar, apenas criar a variavel (tvlz nem precise criar a variavel de fato)

// qntd indeterminada de repeticoes
do {
    opcao = getInteiroAleatoriaEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`);
} while (opcao != -1)

console.log('Até a próxima!'); 