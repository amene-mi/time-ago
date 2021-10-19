var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [
            '.js'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
        compress: true,
        port: 4200
    }
};