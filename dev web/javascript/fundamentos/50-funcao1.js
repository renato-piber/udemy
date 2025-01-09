// funcao é um verbo, é um bloco de codigo, receita de bolo

// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

// nao e tao formal a questao do parametros
imprimirSoma(2, 3);
imprimirSoma(2); // NaN, para tratar desse problema, poderiamos definir um valor padrao para o parametro "b"
imprimirSoma(2, 10, 4, 5, 6, 7); // 12, os parametros excedentes sao ignorados
imprimirSoma(); // NaN, para tratar desse problema, poderiamos definir um valor padrao para o parametro "a" e "b"

//-----------------------------------------------------

// funcao com retorno
function soma(a = 1, b = 0){
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2)); // 2, pois o b tem valor padrao 0
console.log(soma()); // 1, pois o a tem valor padrao 1