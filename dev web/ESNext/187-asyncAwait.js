// como transformar um codigo assincrono em algo sincrono, usando async/await

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

// recurso do ES8
// objetivo de simplificar o uso de promises...
let obterAlunos = async () => { // é preciso marcar a funcao com a palavra async, ai qnd a funcao retorna uma promise, o await vai esperar a promise ser resolvida. Ela retorna automaticamente uma promise
    const ta = await getTurma('A'); // o await espera a promise ser resolvida, e atribui o resultado a variavel ta
    const tb = await getTurma('B'); // o await espera a promise ser resolvida, e atribui o resultado a variavel tb
    const tc = await getTurma('C'); // o await espera a promise ser resolvida, e atribui o resultado a variavel tc
    return [].concat(ta, tb, tc); // concatena os arrays
}   // retorna um objeto AsyncFunction

obtenerAlunos() // chama a funcao
    .then(alunos => alunos.map(a => a.nome)) // mapeia os alunos para pegar apenas os nomes
    .then(nomes => console.log(nomes)) // imprime os nomes
    .catch(e => console.log(e.message)); // se der erro, ele vai para o catch, que recebe o argumento como erro



// tb da pra fazer assim:
// let obterAlunos = async () => {
//     const [ta, tb, tc] = await Promise.all([
//         getTurma('A'),
//         getTurma('B'),
//         getTurma('C')
//     ]);
//     return [].concat(ta, tb, tc);
// }
// Agora as três promessas são iniciadas juntas, e o await espera todas ao mesmo tempo.

// Continua legível, mas mais eficiente.