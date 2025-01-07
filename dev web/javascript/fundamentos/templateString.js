// uso da crase (back stickk) para criar template strings
const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!'; // concatenação
const template = `
    Olá 
    ${nome}!`; // template string (permite quebrar linha e expressões e chamar funcoes)

console.log(concatenacao, template);

// expressões...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);