const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

funcs[2](); // 2, pois o escopo de i é o bloco do for (usei let para declarar i)
// conceito de CLOSER: a função criada dentro do for tem acesso ao escopo léxico onde foi criada (ela tem consciencia do seu contexto léxico, que é o contexto onde a função foi escrita)
funcs[8](); 