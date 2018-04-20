# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [Unreleased]
### Added
### Changed
- Fixed eager loading typo
### Removed

## [1.0.7] - 2018-04-18
### Added
- Added a 503 template

### Changed
- Switched validation to `hyperform.js` with custom logic for file-uploads and checkbox-groups
- Switched order for `loadcss` and `preloadcss` - BUGFIX IE
- Commented out jQuery
- Updated scripts of `loadcss`and `preloadcss`
- Using `HTTP_HOST` instead of `SERVER_NAME` in Craft config
- Added fallback if no entry is available in `breadcrumbs`
- Moved 404 to globals so the page gets a response-status of 404
- Changed building script from `dist` to `build`


## [1.0.6] - 2018-03-17
### Added
- Macro for navigations (with MegaMenu support)
- Added styling to remove outline for navigation buttons
- Added `suppressTemplateErrors` to default live config
- ES6 version of tabs: `future-tabs`

### Changed
- Updated `normalize.scss` to 8.0.0
- Inlined dimensions of all SVG's
- Extend mechanism in pages
- Switched to https
- Fixed duplicate license key issue
- Added `babili` as default Javascript minifier (instead of UglifyJs)

### Removed
- Removed `h5bp` reset
- Removed `sprite.scss`

## [1.0.5] - 2018-02-26
### Added
- getMagentoInfo snippet (js)
- Uglify plugin for webpack
- `babel-loader` with preset-env fix in `webpack.config.babel.js`

### Changed
- Optimized imager macro for picture elements
- Moved polyfill for element-closest to global
- Changed `loadCss`to `loadcss`

### Removed
- Removed critical css from templates
- Temporarily removed Calendar plugin (until templating is done)


## [1.0.4] - 2018-02-05
### Added
- Payment SVG's optimized
- Font-loading strategy
- Focal point plugin

### Changed
- Optimized markup after WC3 Validator check
- Freeform update 1.8.2
- Cleaned up Imager macro
- Subnavigation: switched out `depth` for `level` (deprecated)
- Added conditional for fontsLoaded around font scripts

## [1.0.3] - 2018-01-25
### Added
- Extra js-modules: masonry, flyout, carousels (flickity), collapse
- Extra craft component: collapse
- Correct focal point for imager on regular images
- Macro for lazy loading background images in Craft

### Changed
- Slicing folder - link to assets
- Browserlist: `> .05% in BE, not ie <= 10`
- update cookies and notification banner (js-module)
- mqPacker config updated to better sort mediaqueries

## [1.0.2] - 2018-01-05
### Changed
Webpack Clean task: updated to clean only hashed

### Removed
Craft starter-kit removed

## [1.0.1] - 2018-01-05
### Changed
Updated
- Craft CMS (2.6.3002)
- Freeform (1.8.1)
- Calendar (1.10.3)

### Fixed
- Critial Css - cookie fix

## [1.0.0] - 2018-01-05
### Added
- Webpack config
- Gulp
- Babel
- Javascript Linter
- Postcss setup for scss
- Use of .browserlistRC in Postcss setup
- Dist folder for assets
- Wireframe style for quick prototyping
- Seeded data for dummy content
- Critical CSS in combination with LoadJs and LoadCss
- Craft setup
- Craft components
- RSS Feed: newsfeed.xml
- Craft plugins:
	- Amnav
	- Assetrev
	- Cookies
	- Cpbodyclasses
	- Cpcss
	- Directorycontents
	- Eagerbeaver
	- Freeform
	- Fruitlinkit
	- Hacksaw
	- Imager
	- Inlin
	- Minify
	- Relabel
	- SeoMatic
	- Relabel
	- Smartmap
	- Sproutimport
	- Supertable
	- Taskmanager
	- Translate
	- Zohoprocess

### Changed
- Scss more component-based
- Javascript switch to ES6

### Removed
