// vou tentar usar uma regex (expressao regular)

function extrairCoeficientes(equacao) {
    // Remove espaços e garante que a equação está no formato correto
    equacao = equacao.replace(/\s+/g, '').replace('=0', '');

    // Expressão regular para capturar os coeficientes A, B e C
    const regex = /([+-]?\d*)x\^2([+-]?\d*)x([+-]?\d+)/;
    const match = equacao.match(regex);

    if (!match) {
        throw new Error("Equação inválida");
    }
    else {
        return match;
    }
}

function bhaskara() {
    // desestrurar os coeficientes e converter pra str
    let [,a,b,c] = extrairCoeficientes(equacao);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    
    // calcular o delta
    let delta = b**2 - 4 * a *c;

    // testar se o delta deu negativo
    if (delta < 0){
        throw new Error('delta negativo');
    }
    else {
        // calcular o resto da equacao
        const x1 = (-b + Math.sqrt(delta)) / 2*a; // x1
        const x2 = (-b - Math.sqrt(delta)) / 2*a; // x2

        return [x1, x2];
    }
}

let equacao = "3x^2 - 50x + 12";

const valores = bhaskara();

console.log(`X1 = ${valores[0]} | X2 = ${valores[1]}`);