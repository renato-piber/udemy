function escola(nota) {

    let maiorMultiplo = Math.ceil(nota /5) * 5;

    if (nota >= 37 && (maiorMultiplo - nota) <= 3) {
        return `nota: ${maiorMultiplo}.: aprovado`;
    }
    else {
        return 'reprovado';
    }
}
const nota = 84;

console.log(escola(nota));