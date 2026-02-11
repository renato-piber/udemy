const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
    const isDev = argv.mode === 'development'

    return {
        entry: './src/index.js',

        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'build'),
            assetModuleFilename: 'assets/[name].[hash][ext]',
            clean: true
        },

        devServer: {
            static: { // “De onde o servidor vai servir os arquivos?”
                directory: path.resolve(__dirname, 'build')
            },
            port: 9000, // “Onde eu acesso no navegador?”
            open: true, // “Quero abrir o browser automaticamente?”
            hot: true // “Quero atualização sem refresh?”
        },

        module: { // “Como transformar arquivos que NÃO são JavaScript em algo que o JavaScript consegue usar.”
            rules: [
                {
                    test: /\.s?[ac]ss$/,
                    use: [ // aqui a ordem é de baixo para cima
                        MiniCssExtractPlugin.loader, // extrai CSS para arquivo separado
                        'css-loader', // transforma pra um modulo js 
                        'sass-loader' // tranforma em css
                    ]
                },
                { // aqui sao imagens importadas no JS/CSS
                    test: /\.(png|jpe?g|gif|svg)$/i, // “Arquivos binários não entram no JS, só são copiados.”
                    type: 'asset/resource'
                },
                {
                    test: /\.(woff2?|ttf|eot|otf)$/i,
                    type: 'asset/resource'
                }
            ]
        },

        optimization: { // “Arquivos binários não entram no JS, só são copiados.”
            minimize: !isDev,
            minimizer: [
                new TerserPlugin(),
                new CssMinimizerPlugin() // recebe o arquivo CSS ja extraido
            ]
        },

        plugins: [
            new MiniCssExtractPlugin({ // “Não quero CSS inline dentro do JS.”
                filename: 'estilo.css'
            }),

            new CopyWebpackPlugin({ // aqui sao arquivos estaticos
                patterns: [
                    { from: 'src/pages', to: 'pages' },
                    { from: 'src/imgs', to: 'imgs' }
                ]
            }),

            new HtmlWebpackPlugin({
                template: 'src/index.html'
            })
        ],

        devtool: isDev ? 'source-map' : false // “Em dev quero rastrear erros até o código original.”
    }
}
