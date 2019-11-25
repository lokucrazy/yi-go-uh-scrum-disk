const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = {
	mode: 'development',
	entry: './test/index.ts',
	output: {
		filename: 'testBundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new webpack.ProgressPlugin()
	],

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		]
	},
	
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},	

	target: 'node',
	externals: [nodeExternals()],
	node: {
		fs: 'empty'
	}
}

module.exports = config