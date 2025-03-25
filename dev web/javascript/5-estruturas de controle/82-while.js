function getInteiroAleatoriaEntre (min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

// qntd indeterminada de repeticoes
while (opcao != -1) {
    opcao = getInteiroAleatoriaEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`);
}

console.log('Até a próxima!'); 