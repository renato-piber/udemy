function tratarErro(erro) {
    // throw new Error('...');
    // throw 10;
    // throw true;
    // throw 'mensagem';
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }; // joga uma mensagem de erro
}

function imprimirNomeGritado(obj) {
    try{ 
        console.log(obj.name.toUpperCase() + '!!!'); 
    } catch (e) {
        tratarErro(e);
    } finally {
        console.log('final');
    }
}

const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj); // TypeError: Cannot read property 'toUpperCase' of undefined