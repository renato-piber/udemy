// esse arquivo sera interpretado pelo node, assim, usaremos a escrita que o node entende
const modoDev = process.env.NODE_ENV !== 'production' // pega a variavel de ambiente alterada para saber o mode do webpack
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin") // plugin que extrai o css para um arquivo externo
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js', // inicio do sistema de modulos
    output: {
        filename: "principal.js", // nome do arquivo de saida
        path: __dirname + '/public' // __dirname aponta para a raiz. pasta para onde o build sera enviado
    },
    optimization: {
        minimizer: [ // configuraco dos minificadores
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css" // nome do arquivo gerado a partir da interpretacao dos arquivos CSS's
        })
    ],
    module: {
        rules: [ // é aqui q nos colocamos todos os nossos loaders
            { 
                test: /\.s?[ac]ss$/, // teste para saber se aquele arquivo sera lido ou nao
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', // adiciona CSS a DOM injetando a tag <style> => o arquivo css vai pra dentro do js final, que injeta na dom o estilo
                    'css-loader', // interpreta @import, url()...
                    'sass-loader'
                ]
            }
        ]
    }
}