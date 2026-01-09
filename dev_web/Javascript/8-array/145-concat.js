const filhas = ['Valesca', 'Jéssica', 'Ana'];
const filhos = ['Pedro', 'João', 'Carlos'];
const todos = filhas.concat(filhos); // concatena os arrays
console.log(todos, filhas, filhos); // imprime o array concatenado e os arrays originais

console.log(['a', 'b'].concat(1, 2, [3, 4], 5, [[6, 7]])); // concatena números e arrays