const mesDoAno = (mes) => {
    meses = {
        1: 'janeiro',
        2: 'fevereiro',
        3: 'março',
        4: 'abril',
        /*...*/
    }

    return meses[mes];
}

console.log(mesDoAno(3))