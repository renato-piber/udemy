console.log(soma(3, 4)); // é possivel acessar as funcoes NOMEADAS  declaradas no inicio do codigo, visto que o interpretador do JS carrega TODAS as funcoes no inicio da execucao
// console.log(sub(3,4)) // error: é uma funcao anonima

// function declaration (tradicional) ==> pd ser executada antes da declaracao
function soma(x, y){
    return x + y;
}

// function expression (armazernar em uma constante)
const sub = function (x, y){
    return x - y;
}

// named function expression (mistura das duas anteriores)
const mult = function mult(x, y){ // o nome dela aparece qnd der erro
    return x * y;
}

