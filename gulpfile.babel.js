import gulp from 'gulp';
import notify from 'gulp-notify';
import gutil from 'gulp-util';
import critical from 'critical';
import del from 'del';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';


let config = {};
config = require('./config/config');

/*	TASKS

	1. Clean: cleans out dist folder
	2. Webpack: runs webpack dev server on port 9000 (default)
	3. Images: run image optimization for static images
	4. Watch: watches images for changes
	5. Critical: create citical css sheets for all items in config
	6. Magento task: copies folders (img,static-img) and production css to styles.css

*/

// --------------------------------------------------------------------
// CLEAN
// --------------------------------------------------------------------
gulp.task('clean', () => {
	del(config.gulp.src.clean).then(() => {
		gutil.log('🗑️  Project cleaned');
	});
});


// --------------------------------------------------------------------
// WEBPACK
// --------------------------------------------------------------------
gulp.task('webpack', () => {
	const server = require('./config/server.js').default;
	server.listen(config.server.port, () => {
		gutil.log(gutil.colors.magenta(`🚎  Server is now running at port ${config.server.port}`));
	});
});

// --------------------------------------------------------------------
// OPTIMIZE IMAGES
// --------------------------------------------------------------------
gulp.task('images', () => {
	gulp.src(`${config.gulp.src.basePath}${config.gulp.src.img}/*`)
		.pipe(imagemin([
			mozjpeg({
				quality: 80, progressive: true
			}),
			pngquant({
				quality: 85
			}),
		], [
			imagemin.gifsicle({ interlaced: true }),
		]))
		.pipe(notify('Images minified'))
		.pipe(gulp.dest(`${config.gulp.dist.basePath}${config.gulp.dist.img}`));
});


// --------------------------------------------------------------------
// WATCH TASK
// --------------------------------------------------------------------
gulp.task('watch', () => {
	gulp.watch('*.{png,gif,jpg,jpeg}', { cwd: `${config.gulp.src.basePath}${config.gulp.src.img}` }, ['images']);
});

// --------------------------------------------------------------------
// CRITICAL CSS  -- Craft setup
// --------------------------------------------------------------------
function criticalLoop(data) {
	for (let i = 0; i < data.length; i += 1) {
		gutil.log(data[i]);
		critical.generate({
			src: `${config.gulp.critical.baseUrl}${data[i].uri}`,
			dest: `${data[i].template}_critical.min.css`,
			inline: false,
			ignore: [],
			base: config.gulp.critical.basePath,
			css: [config.gulp.critical.cssPath],
			minify: true,
			width: 1200,
			height: 1200
		}, (err) => {
			gutil.log(err);
		});
	}
}

gulp.task('critical', () => {
	criticalLoop(config.gulp.critical.urls, () => {
	});
});

// --------------------------------------------------------------------
// MAGENTO TASK
// --------------------------------------------------------------------
gulp.task('magento', () => {
	const data = config.gulp.magento.folders;
	for (let i = 0; i < data.length; i += 1) {
		gulp.src(`${data[i]}**/*.*`, { cwd: config.gulp.dist.basePath })
			.pipe(gulp.dest(config.gulp.magento.dist));
	}
	gulp.src('css/*.*.css', { cwd: config.gulp.dist.basePath })
		.pipe(rename(config.gulp.magento.stylesheetName))
		.pipe(gulp.dest(
			config.gulp.magento.baseCssPathPreName +
			config.gulp.magento.themeName +
			config.gulp.magento.baseCssPathPostName));
});


// --------------------------------------------------------------------
// DEFAULT GULP TASK
// --------------------------------------------------------------------
gulp.task('build', ['clean', 'images']);
gulp.task('default', ['watch', 'webpack']);
