const formatacao = $ => {`R$${$.toFixed(2).toString().replace('.',',')}`};

console.log(formatacao(0.30000000000000004))