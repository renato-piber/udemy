function intervalo(vetor) {
    let dentro = 0;
    let fora = 0;
    for (let num of vetor) {
        if (num >= 10 && num <= 20)
            dentro++;
        else
            fora++;
    }

    console.log(`${dentro} nums estao dentro do intervalo e ${fora} estao fora`)
}

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

intervalo(numeros)