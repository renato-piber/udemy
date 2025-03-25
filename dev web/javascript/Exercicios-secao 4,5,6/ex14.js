

const verdureira = fruta => {
    switch (fruta) {
        case "maçã":
            console.log("Não vendemos esta fruta aqui");
            break;
        case "kiwi":
            console.log("Estamos com escassez de kiwis");
            break;
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo")
        default:
            throw Error("nao temos essa fruta");
    }
}

let fruta = 'maçã';
verdureira(fruta);

fruta = 'kiwi';
verdureira(fruta);

fruta = 'melancia';
verdureira(fruta);