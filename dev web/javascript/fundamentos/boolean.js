let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // !! converte para boolean (dupla negacao)

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' '); // string com espaço é true
console.log(!!'texto'); // string com texto é true
console.log(!![]); // array vazio é true
console.log(!!{}); // objeto vazio é true
console.log(!!Infinity); // infinito é true
console.log(!!(isAtivo = true)); // se o resultado for resolvido pra true, o valor é true

console.log('os falsos...');
console.log(!!0);
console.log(!!''); // string vazia é false
console.log(!!null); // null é false
console.log(!!NaN); // NaN é false
console.log(!!undefined); // undefined é false
console.log(!!(isAtivo = false)); // se o resultado for resolvido pra false, o valor é false

console.log('pra finalizar...');
console.log(!!(' ' || null || 0 || 'sou o unico true'));

let nome = '';
console.log(nome || 'Desconhecido'); // se o nome for false, retorna 'Desconhecido'