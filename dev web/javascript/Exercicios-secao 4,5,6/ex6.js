// funcao de juros simples M=C+(C×i×t)
/*
M é o montante final

C é o capital inicial

i é a taxa de juros 

t é o tempo de aplicação */

const jurosSimples = (c, i, t) => c+(c*i*t);
console.log(jurosSimples(1000, 0.05, 12).toFixed(2));

const jurosCompostos = (c, i, t) => c * (1+i)**t
console.log(jurosCompostos(1000, 0.05, 12).toFixed(2));
