function troca(vetorA, vetorB){
    let tamanho = vetorA.length;
    console.log(vetorA, vetorB);
    for(let i = 0; i < tamanho; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
    }
    console.log(vetorA, vetorB);
}



let a = [1,2,3,4,5];
let b = [6,7,8,9,10];

troca(a,b)