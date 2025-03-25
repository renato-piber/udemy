// desvio de fluxo
// o break não age sobre o if, mas sim sobre o bloco mais próximo dele, que é o for
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// interrompe o laço quando encontra o 5
for (let x in nums){
    if (x == 5){
        break;
    }
    console.log(`${x} = ${nums[x]}`);
}

// o continue interrompe a repetição atual e vai para a próxima
for (let y in nums){
    if (y == 5){
        continue;
    }
    console.log(`${y} = ${nums[y]}`);
}

// o break pode ser associado a um rótulo, dai ele sai do laço que está associado a esse rótulo
externo: // rotulo pro laco for
for (let a in nums){
    for (let b in nums){
        if (a == 2 && b == 3) break externo;
        console.log(`Par = ${a}, ${b}`);
    }
}