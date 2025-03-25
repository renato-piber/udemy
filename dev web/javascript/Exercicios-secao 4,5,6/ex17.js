const salario = plano => {
    switch (plano.toUpperCase()) {
        case "A":
            console.log(`seu novo salario: ${1500 + (1500 * 0.1)}`);
            break;
        case "B":
            console.log(`seu novo salario: ${1500 + (1500 * 0.15)}`);
            break;
        case "C":
            console.log(`seu novo salario: ${1500 + (1500 * 0.2)}`);
            break;
        default:
            console.log("plano invalido");

    }
}

salario('a');
salario('b');
salario('c');
salario('d');

