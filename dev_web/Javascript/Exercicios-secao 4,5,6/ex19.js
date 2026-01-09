// function cardapio(cdg, qntd) {
//     switch (cdg) {
//         case 100:
//             console.log(`voce pegou ${qntd} de cachorros quentes... total = R$${3 * qntd}`);
//             break;
//         case 200:
//             console.log(`voce pegou ${qntd} de hamburguer simples... total = R$${4 * qntd}`);
//             break;
//         case 300:
//             console.log(`voce pegou ${qntd} de cheeseburguer... total = R$${5.5 * qntd}`);
//             break;
//         case 400:
//             console.log(`voce pegou ${qntd} de bauru... total = R$${7.5 * qntd}`);
//             break;
//         case 500:
//             console.log(`voce pegou ${qntd} de refrigerante... total = R$${3.5 * qntd}`);
//             break;
//         case 600:
//             console.log(`voce pegou ${qntd} de suco... total = R$${2.8 * qntd}`);
//             break;
//         default:
//             console.log("produto nao encontrado.")
//     }
// }

// cardapio(600,4);


function cardapio(codigo, quantidade) {
    const precos = {
        100: { descricao: "Cachorro Quente", preco: 3.00 },
        200: { descricao: "Hambúrguer Simples", preco: 4.00 },
        300: { descricao: "Cheeseburguer", preco: 5.50 },
        400: { descricao: "Bauru", preco: 7.50 },
        500: { descricao: "Refrigerante", preco: 3.50 },
        600: { descricao: "Suco", preco: 2.80 },
    };

    if (precos[codigo]) {
        let total = precos[codigo].preco * quantidade;
        return `Você pegou ${quantidade}x ${precos[codigo].descricao}... Total = R$${total.toFixed(2)}`;
    } else {
        return "Produto não encontrado.";
    }
}

console.log(cardapio(600, 4));
console.log(cardapio(100, 2));
console.log(cardapio(999, 1));
