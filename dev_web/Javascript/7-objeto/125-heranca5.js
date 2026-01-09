console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object); // os tres possuem um atributo chamado prototype

// String nao possui essa funcao, ent podemos cria-la
String.prototype.reverse = function() {
    return this.split('').reverse().join(''); // podemos acessar o objeto dentro do prototipo atraves do THIS
}
console.log('Escola Cod3r'.reverse());

Array.prototype.first = function() {
    return this[0];
}
console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c'].first());

// Nao é recomendado fazer isso, pois pode sobrescrever metodos ja existentes
String.prototype.toString = function() {
    return 'Lascou tudo';
}
console.log('Escola Cod3r'.reverse()); // nao recomendado