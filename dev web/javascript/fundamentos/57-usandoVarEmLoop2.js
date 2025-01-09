const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

funcs[2](); // 10, pois o escopo de i é a função inteira e não o bloco do for (usei var para declarar i)
funcs[8](); // 10