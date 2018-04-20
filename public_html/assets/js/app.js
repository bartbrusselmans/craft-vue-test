/*

		App entry point

*/

// Relative import
import 'element-closest';
//	Imports
import log from './dev-modules/log';
import loadSvgSprite from './modules/svgSpriteLoader';
import languageToggle from './modules/languageToggle';
import mobileMenu from './modules/mobileMenu';
import cookiesAndNofications from './modules/cookiesAndNotifications';

// Variablese
const inProduction = (process.env.NODE_ENV === 'production');
// let state = '';
let app = '';

function App() {}

// Prototype init
App.prototype.init = function init() {
	const self = this;
	loadSvgSprite();
	self.initialPlugins();
};

//	Start plugins
App.prototype.initialPlugins = function initialPlugins() {
	//	Development logging
	if (!inProduction) {
		console.log('🚀 working in dev-mode');
		log();
	}
	mobileMenu();
};

app = new App();
app.init();
