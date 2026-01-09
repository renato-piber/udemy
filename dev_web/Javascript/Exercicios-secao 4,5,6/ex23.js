const alunos = {
    100: {
        nota1: 10,
        nota2: 3,
        nota3: 8
    },
    200: {
        nota1: 5,
        nota2: 2,
        nota3: 4
    }
}


for (let aluno in alunos) {
    let notas = Object.values(alunos[aluno]);

    let x = Math.max(...notas);
    let indexMaior = notas.indexOf(x);
    
    let notasRestantes = [...notas];
    notasRestantes.splice(indexMaior, 1);

    let media = (4*x + 3*notasRestantes[0] + 3*notasRestantes[1]) / 10

    console.log(`aluno:${aluno}`);
    console.log(`notas:${notas.join(', ')}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(media >= 5 ? 'aprovado' : 'reprovado');
    console.log('-----------------------------------')

}   


