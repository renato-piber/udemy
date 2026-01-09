/*
como recriar a pasta node_modules a partir do package.json

1. dentro do package.json, trocar o o arquivo main

2. detrno de scripts, criar o scriot start com o nome de nodemon. E criar tb outro script com nome de dev, que vai rodar o nodemon

3. dps entrar na pasta via terminal e executar o comando npm i, que vai ler o package.json e instalar o node_modules e todas as dependencias que estao dentro do package.json. Estamos executando scripts atraves do json

4. ou tb usaro comando npm start (npm dev nao vai funcionar, pois nao é um script padrao)

5. para funcionar com npm dev, devemos usar o comando npm run dev, que vai rodar o script dev que foi criado no package.json.

obs.: em scripts, dentro do package.json, podemos criar outros scripts que facam funcoes automatizadas: executar um ambiente, rodar um servidor, enviar arquivos....
*/