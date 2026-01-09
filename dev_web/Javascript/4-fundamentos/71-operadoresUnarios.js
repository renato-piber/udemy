let num1 = 1;
let num2 = 2;

num1++; // forma pos fixada
console.log(num1); // 2

--num1; // forma pre fixada ==> mais prioridade, pois o menos vem antes
console.log(num1); // 1

console.log(++num1 === num2--); // true, pois o num1 foi incrementado antes da comparacao e o num2 foi decrementado depois da comparacao, mt dificil de entender
console.log(num1 === num2); // false, pois o num1 é igual a 2 e o num2 é igual a 1

