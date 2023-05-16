const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devServer: {
        static: './dist',
        port: 3030,
    },
    stats: {
        children: false,
        modules: false,
    },
    devtool: 'inline-source-map',
    plugins:[ new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Prod Mode',
            template: "./src/index.html",
            filename: "index.html"
        }),
    ],
    output: {
        filename: "main.js"
    },
    module:{
        rules:[
            {
                use:[{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader'],
                test:/\.css$/
            }
        ]
    }
};