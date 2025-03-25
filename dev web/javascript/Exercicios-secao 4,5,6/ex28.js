const imparPar = vetor => {
    let par = 0;
    let impar = 0;
    let tamanho = vetor.length;

    for (let num of vetor) {
        if (num % 2 === 0) 
            par++;
        else
            impar++;
    }

    console.log(`de ${tamanho} numeros, ${par} são par e ${impar} sao impar`)
}

const numeros = [1,2,3,4,5,6,7,8,9,10];

imparPar(numeros);