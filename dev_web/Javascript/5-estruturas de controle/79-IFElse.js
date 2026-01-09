const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    } else {
        console.log('Reprovado com ' + nota);
    }
}

imprimirResultado(10); // Aprovado com 10
imprimirResultado(4); // Reprovado com 4
imprimirResultado('Epa!'); // Reprovado com Epa! ==> cuidado com a tipagem fraca do javascript