function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1); // Aprovado com 8.1
soBoaNoticia(6.1); // nao imprime nada

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeEuFalo(); // nao imprime nada
seForVerdadeEuFalo(null); // nao imprime nada
seForVerdadeEuFalo(undefined); // nao imprime nada
seForVerdadeEuFalo(NaN); // nao imprime nada
seForVerdadeEuFalo(''); // nao imprime nada
seForVerdadeEuFalo(0); // nao imprime nada
seForVerdadeEuFalo(-1); // É verdade... -1
seForVerdadeEuFalo(' '); // É verdade...
seForVerdadeEuFalo('?'); // É verdade... ?
seForVerdadeEuFalo([]); // É verdade...
seForVerdadeEuFalo([1, 2]); // É verdade... 1,2
seForVerdadeEuFalo({}); // É verdade... [object Object]