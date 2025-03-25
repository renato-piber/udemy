// regra dos anos bissextos:
// 4 em 4 == bissexto; 100 em 100 == nao; 400 em 400 == bissexto

// ultimo ano bissexto == 2024

const eBissexto = ano => {
    if(ano % 400 === 0) return true;
        //console.log('o ano é bissexto');
    else if (ano % 100 === 0) return false;
        //console.log('o ano não é bissexto');
    else if (ano % 4 === 0) return true;
        //console.log('o ano é bissexto');
    //else
        //console.log('o ano nao é bissexto')
    return false;

}

console.log(eBissexto(2024));