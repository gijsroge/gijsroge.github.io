const path = require('path');
const config = require('./gulp/config.js');

const webpackSetup = {
    entry: config.js.entry,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '/dist/js/'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            },
        ]
    }
};

module.exports = webpackSetup;