// usando promise...
const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '';
            res.on('data', dados => { // conforme os dados vão chegando, eles vão sendo concatenados
                resultado += dados;
            });
            res.on('end', () => { // quando a resposta terminar, o resultado estará completo
                try {
                    resolve(JSON.parse(resultado));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', e => {
            reject(e);
        });
    });
}

// let nomes = []

// getTurma('A').then(alunos => {
//     nomes = alunos.map(a => `A: ${a.nome}`);
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
//             console.log(nomes);
//         });
//     });
// });

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // aqui as tres chamadas sao executadas em paralelo, e o then espera todas terminarem
    .then(turmas => [].concat(...turmas)) // o spread operator concatena os arrays
    .then(alunos => alunos.map(a => a.nome)) // mapeia os alunos para pegar apenas os nomes
    .then(nomes => console.log(nomes))
    // .catch(e => console.log(e.message)); // se der erro, ele vai para o catch, que recebe o argumento como erro

getTurma('D').catch(e => console.log(e.message)); // se der erro, ele vai para o catch, que recebe o argumento como erro