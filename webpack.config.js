var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
	filename: "drawerrr.css"
});

module.exports = {
 entry: [
 	'./src/js/drawerr.js',
    './src/scss/drawerr.scss'
 ],
 output: {
  filename: 'drawerr.min.js',
  path: path.resolve( __dirname, 'dist' )
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
	 extractSass
 ]
};
