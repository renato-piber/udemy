// o estritamente diferente é mais recomendado para comparações

console.log('01)', '1' == 1); // true
console.log('02)', '1' === 1); // false, é estritamente diferente (tipo e valor)
console.log('03)', '3' != 3); // false, o valor é igual, nao diferente
console.log('04)', '3' !== 3); // true, é estritamente diferente (tipo e valor), o tipo é string e number

console.log('05)', 3 < 2); // false
console.log('06)', 3 > 2); // true
console.log('07)', 3 <= 2); // false
console.log('08)', 3 >= 2); // true

const d1 = new Date(0); // 01/01/1970
const d2 = new Date(0); // 01/01/1970
console.log('09)', d1 === d2); // false, pois compara a referencia de memoria e nao o valor
console.log('10)', d1 == d2); // false, pois compara a referencia de memoria e nao o valor
console.log('11)', d1.getTime() === d2.getTime()); // true, pois compara o valor

console.log('12)', undefined == null); // true
console.log('13)', undefined === null); // false