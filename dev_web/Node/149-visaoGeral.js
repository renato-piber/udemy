// o node trouxe uma revolução pra web
// é a mesma engine do browser
// node é o runtime do backend do JS, no servidor
// sistema de cliente e servidor, o node é mais usado para fazer webservices
// criador: Ryan Dahl em 2009
// ele estava comparadno dois grandes webserver: o apache e o nginx
/*
apache: servidor baseado em threads, cada requisição cria uma thread, o que consome muita memória e processamento, o que torna o servidor lento

nginx: cria uma thread master, que processa as requisicoes e as direciona para o servidor ==> sistema baseado para a criacao do node

o nginx mantem a velocidade de resposta alta, alem do qntd de memoria utilizada, mesmo com muitas requisições simultâneas, o que o torna mais eficiente que o apache

o node nasceu para fazer a mesma coisa, mas com o JS, que é uma linguagem de programação assíncrona, ou seja, não bloqueia o processamento do servidor enquanto espera por uma resposta de outro servidor ou banco de dados. Isso significa que o node pode lidar com muitas requisições simultâneas sem precisar criar várias threads, o que torna o servidor mais leve e rápido.

ele tenta organizar o sistema de IO assincrono (assynchronous input/output):
    modelo de execucao em que as requisicoes nao atrapalham a execucao do codigo, mas nao é a mesma coisa do processamento multithreading



*/