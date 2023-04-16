const HtmlWebpackPlugin = require('html-webpack-plugin')
const { htmlWebpackPluginTemplateCustomizer } = require('template-ejs-loader')

const pages = [
	{
		filename: 'index.html',
		data: {
			title: 'Index',
			module: 'home',
			contentPath: '../pages/home/index.ejs',
		},
	},
	{
		filename: 'product.html',
		data: {
			title: 'Product page',
			module: 'product',
			contentPath: '../pages/product/index.ejs',
		},
	},
]

module.exports = pages.map(
	({ filename, data }) =>
		new HtmlWebpackPlugin({
			cache: false,
			base: '/',
			filename,
			template: htmlWebpackPluginTemplateCustomizer({
				templatePath: './src/template/base.template.ejs',
				templateEjsLoaderOption: {
					data,
				},
			}),
			minify: {
				removeComments: false,
			},
			inject: 'body',
		}),
)
