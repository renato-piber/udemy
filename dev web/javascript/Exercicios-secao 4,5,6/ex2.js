// condicao para a existencia de um triangulo: a soma de cada dois lados deve ser sempre maior que a medida do terceiro lado.

function triangulo(a, b, c){
    // testar se o triangulo é possivel
    if(a+b>c && a+c>b && b+c>a){
        // classifica o triangulo
        if (a == b && a == c){
            return 'triangulo equilatero';
        }
        else if ((a == b && a != c) || (b == c && b != a)){
            return 'triangulo isosceles';
        }
        else{
            return 'triangulo escaleno'
        }
    } else {
        return 'com os valores informados nao é possivel formar um triangulo';
    }
};

console.log(triangulo(3,3,3));
console.log(triangulo(7,7,5));
console.log(triangulo(3,4,5));