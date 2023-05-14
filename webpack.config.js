const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: "main.js"
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin( {
            template: "./src/index.pug",
            filename: "index.html"
        }),
        new TerserWebpackPlugin(),
        new StylelintPlugin({
            configFile: 'stylelintrc',
            context: 'src',
            files: '**/*.css',
            failOnError: false,
            quiet: false,
            exclude:  '/node-modules/',
            emitErrors: true // by default this is to true to check the CSS lint errors
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin(),]
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
            },
            {
                test:/\.pug$/,
                loader: 'pug-loader',
				options:  {
				    pretty: true
				}
            },
            {
                test:/\.js$/,
                exclude: '/node-modules/',
                use: 'eslint-loader'
            }
        ]
    }
};