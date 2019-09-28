const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const config = {
    mode: 'development',
    entry: './test/testRunner.js',
    output: {
        filename: 'testBundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
        fs: 'empty'
    },

    plugins: [
        new WebpackShellPlugin({
            onBuildExit: "node ./dist/testBundle.js",
        })
    ]
};

module.exports = config;