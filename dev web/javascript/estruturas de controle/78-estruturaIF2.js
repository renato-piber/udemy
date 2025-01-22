function teste1(num){
    if(num > 7)
        console.log(num)
    
    console.log('Final')
}

teste1(6)
teste1(8) // 8

function teste2(num){
    if(num > 7); { // cuidado com o ';', nao usar com as estruturas de controle
        console.log(num)
    }
}