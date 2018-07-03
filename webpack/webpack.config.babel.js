import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import MinifyPlugin from 'babel-minify-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import ManifestPlugin from 'webpack-manifest-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin';
import 'babel-polyfill';

let config = {};
config = require('../web_config/config');

const inProduction = (process.env.NODE_ENV === 'production');

//	Default entry-points
const entryPoint = {
	app: [
		'babel-polyfill',
		'./js/app.js',
		'./scss/app.scss'
	],
	form: './js/form.js',
	wireframes: './scss/wireframes.scss'
};

//	Output points -- js
const output = inProduction ?
	{
		filename: 'js/[name].[chunkhash:7].js'
	} :
	{
		filename: 'js/[name].js',
	};

output.path = path.resolve(__dirname, '../public_html/assets/dist');
output.publicPath = '/assets/dist/';

//	plugins
const plugins = inProduction ?
	[
		new CleanWebpackPlugin(
			['css', 'js', 'svg'],
			{
				root: path.resolve(__dirname, '../public_html/assets/dist'),
				verbose: true,
				dry: false,
				exclude: ['app.js', 'app.css', 'wireframes.css', 'svg-sprite.svg']
			}
		),
		new MinifyPlugin(),
		new ExtractTextPlugin({
			filename: 'css/[name].[contenthash:7].css',
			allChunks: true
		}),
		new MinifyPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new ManifestPlugin({
			fileName: 'manifest.json',
			stripSrc: true,
			map: (file) => {
				file.name = path.join(path.dirname(file.path), file.name);
				return file;
			}
		})
	] :
	[
		new ExtractTextPlugin({
			filename: 'css/[name].css'
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: false
		})
	];

plugins.push(
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
	}),
	// new webpack.ProvidePlugin({
	// 	$: 'jquery',
	// 	jQuery: 'jquery'
	// }),
	new WebpackNotifierPlugin({
		alwaysNotify: true
	}),
	new webpack.DefinePlugin({
		PRODUCTION: JSON.stringify(inProduction)
	}),
	new SVGSpritemapPlugin({
		src: path.resolve(__dirname, '../public_html/assets/img/icons-svg/**/*.svg'),
		filename: inProduction ? 'svg/svg-sprite.[hash].svg' : 'svg/svg-sprite.svg',
		prefix: '',
		chunk: 'svg-sprite',
		svgo: {
			plugins: [
				{ cleanupAttrs: true },
				{ removeDoctype: true },
				{ removeComments: true },
				{ removeMetadata: true },
				{ removeDesc: true },
				{ removeXMLProcInst: true },
				{ removeUselessDefs: true },
				{ removeEmptyAttrs: true }
			],
		},
	})
);

module.exports = {
	context: path.resolve(__dirname, '../public_html/assets'),
	entry: entryPoint,
	output,
	plugins,
	watch: (inProduction === false),
	devtool: inProduction ? '' : 'source-map',
	module: {
		rules: [{
			test: /\.s[ac]ss$/,
			loader: ExtractTextPlugin.extract([{
				loader: 'css-loader',
				options: {
					minimize: !inProduction,
					sourceMap: true
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true,
					config: {
						path: './web_config/postcss.config.js'
					}
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: true
				}
			}
			])
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		},
		{
			test: /\.(png|jpe?g|gif)$/,
			exclude: /(static-images)|(icons-svg)/,
			loaders: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'img/'
				}
			},
			'img-loader'
			]
		},
		// {
		// 	test: /\.(woff|woff2)$/,
		// 	exclude: /node_modules/,
		// 	use: [
		// 		{
		// 			loader: 'file-loader',
		// 			options: {
		// 				name: '[name].[ext]',
		// 				outputPath: 'fonts/'
		// 			}
		// 		}
		// 	]
		// },
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
          // the "scss" and "sass" values for the lang attribute to the right configs here.
          // other preprocessors should work out of the box, no loader config like this necessary.
					'scss': [
						'vue-style-loader',
						'css-loader',
						'sass-loader'
					],
					'sass': [
						'vue-style-loader',
						'css-loader',
						'sass-loader?indentedSyntax'
					]
				}
			}
		}
		]
	},
};
