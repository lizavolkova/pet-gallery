// webpack v4
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: false
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'image-webpack-loader',
                enforce: 'pre'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {} ),
        new MiniCssExtractPlugin({
            filename: 'style.[hash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            title: 'My Awesome application',
            template: './src/index.ejs',
            //template: require('html-webpack-template'),
            filename: 'index.html'
        }),
        new WebpackMd5Hash(),
        new CopyWebpackPlugin([{
            from:'./src/assets', to:'assets'
        }])
    ],
    devServer: {
        disableHostCheck: true,
        compress: true,
        port: 9000
    }
};