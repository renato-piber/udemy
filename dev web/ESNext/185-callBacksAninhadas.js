// sem promise
const http = require('http');

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, res => {
        let resultado = '';
        res.on('data', dados => { // conforme os dados vão chegando, eles vão sendo concatenados
            resultado += dados;
        });
        res.on('end', () => { // quando a resposta terminar, o resultado estará completo
            callback(JSON.parse(resultado));
        });
    })
}


let nomes = []
// essa funcao meio que simula o promise, CALLBACK HELL (mts callbakcs aninhadas)
getTurma('A', alunos => {
    nomes = alunos.map(a => `A: ${a.nome}`);
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
            console.log(nomes);
        });
    });
});
