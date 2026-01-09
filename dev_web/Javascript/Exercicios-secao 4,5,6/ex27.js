function altura(crianca1, crianca2) {
    let anos = 0;
    let altura1 = crianca1.altura;
    let taxa1 = crianca1.taxa;
    let altura2 = crianca2.altura;
    let taxa2 = crianca2.taxa;

    if (altura1 < altura2) {
        console.log('a crianca1 é menor');

        if (taxa1 <= taxa2) {
            console.log('a crianca1 nunca sera maior que a crianca 2');
            return;
        }

        while (altura1 <= altura2) {
            altura1 += taxa1;
            altura2 += taxa2;
            anos += 1;
        }

        console.log(`em ${anos} anos, a crianca1 sera maior`);
    }

    else if (altura2 < altura1) {
        console.log('a crianca2 é menor')

        if (taxa2 <= taxa1) {
            console.log('a crianca2 nunca sera maior que a crianca 1');
            return;
        }

        while (altura2 <= altura1) {
            altura1 += taxa1;
            altura2 += taxa2;
            anos += 1;
        }

        console.log(`em ${anos} anos, a crianca2 sera maior`)
    }

    else
        console.log('as crincas tem a mesma altura')
}



let crianca1 = {
    altura: 140,
    taxa: 10
}

let crianca2 = {
    altura: 100,
    taxa: 15
}

altura(crianca1, crianca2)