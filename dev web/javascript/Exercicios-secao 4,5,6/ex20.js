// function sacar(valor) {
//     let carteira = 0;
//     let cedulas = [];

//     while (carteira < valor) {
//         if ((carteira + 100) < valor) {
//             carteira += 100;
//             cedulas.push(100);
//         }
//         else if ((carteira + 50) < valor) {
//             carteira += 50;
//             cedulas.push(50);
//         }
//         else if ((carteira + 10) < valor) {
//             carteira += 10;
//             cedulas.push(10);
//         }
//         else if ((carteira + 5) < valor) {
//             carteira += 5;
//             cedulas.push(5);
//         }
//         else if ((carteira + 1) < valor) {
//             carteira += 1;
//             cedulas.push(1);
//         }
//         else {
//             carteira += 1;
//             cedulas.push(1);
//         }
//     }
    
//     return [carteira, cedulas];
// }

// [carteira, cedulas] = sacar(18);

// console.log(carteira, cedulas)

// versao do chatGPT kkk
function sacar(valor) {
    let cedulasDisponiveis = [100, 50, 10, 5, 1];
    let resultado = {};

    for (let cedula of cedulasDisponiveis) {
        let quantidade = Math.floor(valor / cedula);
        if (quantidade > 0) {
            resultado[cedula] = quantidade;
            valor -= quantidade * cedula;
        }
    }

    for (let [cedula, quantidade] of Object.entries(resultado)) {
        console.log(`${quantidade} nota(s) de R$ ${cedula}.`);
    }
}

// Exemplo de uso:
sacar(18);
