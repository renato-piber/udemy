// cadeia de prototips (prototype chain) ==> forma como os objetos herdam as caracteristicas de outros objetos

Object.prototype.attr0 = '0'; // não faça isso em casa
const avo = { attr1: 'A' }; // avo tem como prototipo Object.prototype
const pai = { __proto__: avo, attr2: 'B' };
const filho = { __proto__: pai, attr3: 'C' };

// console.log(filho.attr1); // A
// console.log(filho.attr0); // 0
// console.log(filho.attr2); // B


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`; // o ths do pai nao aponta para ele, mas para os seus filhos
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 // shadowing ==> sobreescreve o valor do objeto pai
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}   

// define a relacao de prototipo(heranca)
Object.setPrototypeOf(ferrari, carro); // 'ferrari tem carro como seu prototipo' ==> __proto__: carro
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);
console.log(volvo.status());
ferrari.acelerar(300);
console.log(ferrari.status());
