function calculadora (x, operacao, y) {
    switch (operacao) {
        case '+':
            console.log(x + y);
            break;
        case '-':
            console.log(x - y);
            break;
        case '*':
            console.log(x * y);
            break;
        case '/':
            console.log(x/y);
            break;
        default:
            console.log('operacao invalida');
    }
}
calculadora(1, '+', 1);
calculadora(1, '-', 1);
calculadora(1, '*', 1);
calculadora(1, '/', 1);
calculadora(1, '=', 1);
