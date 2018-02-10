const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: "drawerr.css"
});

const styleLint = new StyleLintPlugin({
	files: './src/scss/**/*.scss ',
	syntax: 'scss',
});

module.exports = {
 entry: {
	 drawerr:'./src/js/main.js',
	 drawer:'./src/scss/drawerr.scss'
 },
 output: {
  filename: '[name].js',
  path: path.resolve( __dirname, 'dist' ),
  library: '[name]',
  libraryTarget: 'var',
 },
 module: {
	 rules: [
		 {
			 test: /\.js$/,
			 exclude: /node_modules/,
			 loader: 'babel-loader',
			 options: {
				 presets: ['es2015']
			 }
		 },
	 	{
		 test: /\.scss$/,
		 use: extractSass.extract({
			 use: [{
				 loader: "css-loader"
			 }, {
				 loader: "sass-loader"
			 },{
				 loader: "postcss-loader"
			 }]
		 })
	 }]
 },
 plugins: [
	 extractSass,
	 styleLint
 ]
};
