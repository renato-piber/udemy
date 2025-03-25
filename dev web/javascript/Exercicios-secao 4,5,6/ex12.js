// com funcao
function fatorial(num = 0, resultado = 1) {
    if (num === 1 || num === 0)
        return resultado;

    return fatorial(num - 1, resultado * num);

}
//console.log(fatorial(0));

// com loop
const num = 0;
let resultado = 1;

for (let i = num; i > 1; i--) {
    resultado *= i;
}

console.log(resultado);