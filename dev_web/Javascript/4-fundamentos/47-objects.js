const prod1 = {}; // colecao chave-valor (dicionario)
prod1.nome = 'Celular Ultra Mega'; // criado dinamicamente
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço


console.log(prod1);

// isso nao e um JSON, e um objeto em JS
/*
JSON (JavaScript Object Notation) é um formato textual que é usado para trocar dados entre sistemas
JS object é um dado chave valor
*/
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blog: 'https://blogdozup.com.br',
        curso: 'Curso de JS',
        obj: {
            nome: 'opa'
        }
    }
};

console.log(prod2.obj.obj.nome); // opa