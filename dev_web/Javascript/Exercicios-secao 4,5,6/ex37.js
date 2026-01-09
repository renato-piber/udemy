function pa(n, a1, r) {
    let vetor = [];

    for (let i = 1; i <= n; i++) {
        vetor.push((a1 + (i - 1) * r));
    }

    console.log(vetor);
    console.log(vetor.reduce((x, y) => x + y, 0));
}

function pg(n, a1, q) {
    let vetor = [];

    for (let i = 1; i <= n; i++) {
        vetor.push((a1 * (q ** (i-1))));
    }

    console.log(vetor);
    console.log(vetor.reduce((x, y) => x + y, 0));
 }

pa(10, 1, 1)
pg(10, 1, 2)