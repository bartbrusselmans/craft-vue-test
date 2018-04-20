import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.config.babel';

let config = {};
config = require('./config');


webpackConfig.entry.app.unshift(`webpack-dev-server/client?${config.server.localUrl}:${config.server.port}/`);


const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
	publicPath: webpackConfig.output.publicPath,
	contentBase: config.gulp.src.basePath,
	quiet: false,
	disableHostCheck: true,
	headers: { 'Access-Control-Allow-Origin': '*' },
	noInfo: false,
	lazy: false,
	inline: true,
	stats: {
		colors: true
	}
});

export default server;
