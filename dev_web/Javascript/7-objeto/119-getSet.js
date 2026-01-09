const sequencia = {
    _valor: 1, // convencao
    get valor() { return this._valor++ }, // pos incremento
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor;
        }
    }

}

// console.log(sequencia.valor, sequencia.valor); // get
// sequencia.valor = 1000; // set
// console.log(sequencia.valor, sequencia.valor);
// sequencia.valor = 900; // set (nao deve alterar o valor)
// console.log(sequencia.valor, sequencia.valor);


