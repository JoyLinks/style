const path = require('path');
// 处理样式多合一
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 处理样式压缩优化
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'joyzl-style.js',
		library: {
			name: 'style',
			type: 'umd'
		},
		clean: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'joyzl-style.css',
		})
	],
	module: {
		rules: [{
			test: /\.css$/i,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			// MiniCssExtractPlugin.loader 和 'style-loader' 有冲突不能同时配置
		}]
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		]
	}
};