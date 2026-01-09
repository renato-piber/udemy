// retornar o numero de vezes que ele superou seu recorde e em qual partida fez seu pior jogo

// obs.: da pra usar outro FOR que utilize logica de index pra armazenar o index do primeiro jogo

function basquete(array) {
    // transformei em um array
    const pontos = array.split(' ').map(Number);

    let maior = pontos[0];
    let menor = maior;
    let contador = 0;

    for (let ponto of pontos) {
        if (ponto > maior){
            maior = ponto;
            contador += 1;
        }
        if (menor > ponto) {
            menor = ponto;
        }
    }

    
    let piorJogo = pontos.indexOf(menor) + 1;

    return [contador, piorJogo];
}

// programa principal
let pontos = "10 20 20 8 25 3 0 30 1";
console.log(basquete(pontos));




// contador = pontos.reduce((x, y) => y > x ? contador += 1 : contador)


