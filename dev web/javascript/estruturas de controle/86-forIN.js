// ha formas melhores de fazer isso, mas é um exemplo de como usar o for in

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// ele recebe o indice, nao o objeto
for(let i in notas) {
    console.log(`nota = ${notas[i]}`);
}

// percorrer os atributos de um objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}