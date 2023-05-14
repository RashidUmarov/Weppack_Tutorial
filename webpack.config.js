const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        port: 3030,
        hot: true,
    },
    devtool: 'inline-source-map',
    plugins:[ new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
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