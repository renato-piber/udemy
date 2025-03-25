const revenda = carro => {
    switch (carro) {
        case "hatch":
            console.log("compra efetuada com sucesso");
            break;
        case "sedan": case "caminhonete" : case "motocicleta":
            console.log("Tem ctz que nao prefere este modelo?");
            break;
        default:
            throw Error("Não trabalhamos com este tipo de automóvel aqui”");

    }
}

revenda('hatch');

revenda('sedan');

revenda('caminhonete');

revenda('motocicleta');

revenda('espotivo');
