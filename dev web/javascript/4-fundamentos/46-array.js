const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // undefined, no js não da erro se tentar acessar um índice que não existe
valores[4] = 10; // adiciona um novo valor no array
//console.log(valores);
valores[10] = 12; // adiciona um novo valor no array com um espaço vazio
//console.log(valores[8]); // undefined
//console.log(valores.length); // tamanho do array
valores.push({id: 3}, false, null, 'teste'); // adiciona novos valores no array, não e ideal misturar tipos de dados
console.log(valores.pop()); // remove o último elemento do array
delete valores[0]; // deleta o valor do array, mas o índice continua lá
console.log(typeof valores); // object, array é um tipo de objeto
console.log(valores);
