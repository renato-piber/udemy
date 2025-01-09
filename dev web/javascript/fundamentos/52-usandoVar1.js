// so ha dois escopos de variavel var no JS: global e de função, tudo que for criado fora do escopa de uma função é global/window
// para let e const o escopo é de bloco, funcao e global, ou seja, se for declarada dentro de um bloco, só é visível dentro do bloco
{ 
    { 
        { 
            
                var sera = 'Será???' 
            
        } 
    } 
}

console.log(sera); // A variável var é visível fora do bloco em que foi declarada. ==> questao de escopo

function teste() {
    var local = 123;
    console.log(local);
}

teste();
console.log(local); // A variável local é visível apenas dentro da função em que foi declarada. ==> questao de escopo