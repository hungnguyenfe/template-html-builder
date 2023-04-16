const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlPages = require('./configs/page')

module.exports = {
	entry: './src/modules/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		chunkFilename: 'chunks/[name].chunk.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'@app': path.resolve(__dirname, 'src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
					options: {
						configFile: 'tsconfig.json',
					},
				},
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.ejs$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true,
						},
					},
					{
						loader: 'template-ejs-loader',
					},
				],
			},
		],
	},
	plugins: [new CleanWebpackPlugin(), ...htmlPages],
	devServer: {
		hot: true,
		watchFiles: ['src/template/*.ejs', 'src/pages/**/*.ejs'],
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	optimization: {
		splitChunks: {
			chunks: 'async',
		},
	},
}
