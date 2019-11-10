const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
    mode: 'development',
    entry: './test/index.js',
    output: {
        filename: 'testBundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
        fs: 'empty'
    }
};

module.exports = config;