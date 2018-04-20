//	Project Config file
const path = require('path');

const config = {};

config.server = {
	localUrl: 'http://local.frontend.be',
	port: '9000'
};

config.gulp = {
	src: {
		basePath: 'public_html/assets/',
		img: 'img/static-images/',
		svg: 'img/icons-svg/',
		clean: ['public_html/assets/dist/static-images']
	},
	dist: {
		basePath: 'public_html/assets/dist/',
		img: 'static-images',
		svg: 'public_html/assets/',
	},
	magento: {
		folders: ['fonts', 'img', 'static-img', 'svg'],
		dist: 'magento2/assets/dist/',
		stylesheetName: 'styles.css',
		baseCssPathPreName: 'magento2/app/design/frontend/Glue/',
		baseCssPathPostName: '/web/css/',
		themeName: 'woody_theme'
	},
	critical: {
		baseUrl: 'http://boilerplate.be.preview.glue.be/',
		basePath: 'craft/templates/',
		cssPath: 'public_html/assets/dist/css/app.css',
		urls: [
			{ uri: '', template: 'index' },
			{ uri: 'over', template: 'pages/_entry' }
		],
	},
	webpackStats: {
		assets: true,
		colors: true,
		chunks: false,
		chunkModules: false,
		chunkOrigins: false,
		hash: false,
		timings: false,
		versian: false,
		reasons: true,
		errorDetails: false
	}
};

module.exports = config;
