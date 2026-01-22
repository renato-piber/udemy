const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js', // inicio do sistema de modulos
    output: {
        filename: "assets/js/principal.js", // nome do arquivo de saida
        path: __dirname + '/public', // __dirname aponta para a raiz. pasta para onde o build sera enviado
        clean: true
    },
    devServer: {
        static: {
            directory: "./public"
        },
        port: 9000,
        open: true,
        hot: true
    },
    optimization: {
        minimize: true,
        minimizer: [ // configuraco dos minificadores
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            new CssMinimizerPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/estilo.css" // nome do arquivo gerado a partir da interpretacao dos arquivos CSS's
        }),
        // html index
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/paginas', to: 'paginas' },
                { from: 'src/assets/imgs', to: 'assets/imgs' }
            ]
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