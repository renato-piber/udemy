function intervalo(inicio, fim) {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio];
    }
    
    if (inicio < 0 || fim > 100){
        console.log('o intervalo esta errado')
        return;
    }

    for(let i = inicio; i <= fim; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

intervalo(100, 1);