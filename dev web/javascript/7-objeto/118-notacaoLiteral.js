const a = 1;
const b = 2;
const c = 3;

const obj1 = {a: a, b: b, c: c};
const obj2 = {a, b, c}; // aqui o unico maleficio e q nao pode alterar o nome do atributo

//console.log(obj1, obj2)
///---------------------------------------------------------------------------
const nomeAtbr = 'nota';
const valorAtbr = 7.87;

const obj3 = {};
obj3[nomeAtbr] = valorAtbr;

const obj4 = {[nomeAtbr]: valorAtbr}

console.log(obj3, obj4);
///---------------------------------------------------------------------------
const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() {
        // ...
    }
}

console.log(obj5)