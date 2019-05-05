var path = require('path');
var axios = require('axios')

module.exports = {
    entry: './frontend/src/index.js',
    output: {
        path: path.resolve('./frontend/static/frontend'),
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
    }
}