// tabela verdade, OU e E
/* 
v e v -> v
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xor v -> f
v xor f -> v    
f xor v -> v
f xor f -> f
obs.: nesses xor os dois tem q ser difetentes

!v -> f
!f -> v
*/

function compras(trabalho1, trabalho2) {
    // operadores curto circuito : || &&
    const comprarSorvete = trabalho1 || trabalho2; // ou
    const comprarTv50 = trabalho1 && trabalho2; // e
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2; // ou exclusivo
    const manterSaudavel = !comprarSorvete; // negação logica (operador unario)

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }; // criacao inteligente de um objeto
}
res
console.log(compras(true, true)); // { comprarSorvete: true, comprar: true, comprarTv32: false, manterSaudavel: false }
console.log(compras(true, false)); // { comprarSorvete: true, comprar: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, true)); // { comprarSorvete: true, comprar: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, false)); // { comprarSorvete: false, comprar: false, comprarTv32: false, manterSaudavel: true