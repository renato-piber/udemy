// armazenando a funcao dentro de uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);
//---------------------------------------------------
// armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { // a seta substitui a palavra 'function'
    return a + b;
}

console.log(soma(2, 3));
//---------------------------------------------------
// retorno implicito
const subtracao = (a, b) => a - b; // nao precisa do return e nem das chaves
console.log(subtracao(2, 3));
//---------------------------------------------------

const imprimirA = a => console.log(a);
imprimirA('Legal!!!');