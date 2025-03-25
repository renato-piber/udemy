function funcao1(vetor, numero) {
    let novoVetor = [];
    for (let num of vetor) {
        novoVetor.push(num*numero);
    }

    return novoVetor;
}

const funcao2 = (vetor, numero) => {
    let novoVetor = [];
    for (let num of vetor) {
        if (num > 5)
            novoVetor.push(num*numero);
    }

    return novoVetor;
}

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

console.log(funcao1(numeros, 1));
console.log(funcao2(numeros, 2));