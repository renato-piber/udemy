const escola = "Cod3r"; // String

console.log(escola.charAt(4)); // Retorna o caracter na indx 4 
console.log(escola.charAt(5)); // Retorna vazio, pois não existe o caracter na index 5, mas nao deu erro como em outras linguagens

console.log(escola.charCodeAt(3)); // Retorna o valor unicode do caracter na index 3 

console.log(escola.indexOf('3')); // Retorna a index do caracter passado como parametro
console.log(escola.substring(1)); // Retorna a string apartir da index passada como parametro
console.log(escola.substring(0, 3)); // Retorna a string entre as index passadas como parametro (0 inclusive e 3 exclusive)
console.log('Escola '.concat(escola).concat("!")); // Concatena as strings (une strings)
console.log('Escola ' + escola + '!'); // Concatena as strings (une strings)
console.log('3' + 2); // Concatena os valores, pois o primeiro é uma string
console.log(escola.replace(3, 'e')); // Substitui o caracter passado como parametro pelo outro caracter passado como parametro (nao utiliza o index)
console.log('Ana,Maria,Pedro'.split(',')); // Transforma a string em um array, utilizando o caracter passado como parametro como separador