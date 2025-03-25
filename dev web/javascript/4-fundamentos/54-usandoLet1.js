// let tem 3 escopos: global, de função e de bloco. ou seja, 1 a mais do que var

var numero = 1; // escopo mais abrangente
{
    let numero = 2; // escopo menor
    console.log('dentro =', numero);
}
console.log('fora =', numero);