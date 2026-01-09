const anuidade = (mes, valor) => {
    if (mes < 1 || mes > 12) 
        throw new Error("Mês inválido. Escolha um valor entre 1 e 12.");

    return mes === 1 ? valor : valor * Math.pow(1.05, mes - 1);
}

console.log(anuidade(2, 1000))