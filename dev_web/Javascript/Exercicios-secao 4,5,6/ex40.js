function avaliacao(notas) {
    for(let nota of notas) {

        if (nota >= 9.0 && nota <= 10.0){
            console.log('A');
        }
        else if (nota >= 7.0 && nota <= 8.9){
            console.log('B');
        }
        else if (nota >= 5.0 && nota <= 6.9){
            console.log('C');
        }
        else {
            console.log('D');
        }
    }
}

let notas = [1,2,3,4,5,6,7,8,9,10];

avaliacao(notas);
