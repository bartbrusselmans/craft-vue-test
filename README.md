# Readme



## 1. Webpack / Gulp
Project runs on combination of webpack and gulp.

### Gulp
Tasks are described in the gulpfile. Use for critical CSS only atm, Clean task is being ported to Webpack

### Webpack
Runs through NPM scripts (described in package.json).

- Npm run dev
Starts development and watches scss, images, svg's and JS
- Npm run prod
Generates optimized and hashed versions of the dist files, creates manifest.json

#### Sass
Postcss and plugins are defined in `config/postcss-config.js`.  The browser-versions for sass-files are defined in `.browserlistRC`.

#### JS
Works with `Babel`. Has a number of independent modules, mediaquery state (`reducers`and `store`) and some helpers. At this point jQuery is still available, though, if you don't need it, disable it in your `webpack.config.babel`, it saves you half a MB.

Prefixes are being defined in the `.babelr`, linting is defined in `.eslintrc`.

Use the modular scripts to serve only what you need on specific pages, remove the rest. Use multiple entry points for specific pages.

Todo:
- transform snippets from jquery to ES6
- move libs to npm (if it's possible)

#### Images
Put all your images that aren't being references in you sass in the `static-images` folder.

All other images go in the `bg-images` folder.

#### SVG's
Commonly used SVG's are in the `svg-collection` folder. Put the ones you need in the `icons-svg` for the svg sprite. The sprite is being fetched with javascript.

#### Browser
Added in `.browserlistrc` and `.babelrc`. Currently: `> .05% in BE, not ie <= 10`

## 2. Craft
### Config
All config files can be found in the config folder.

### Templating
We try to work in a modular way. The `template-folder` structure is
- `_components` : all reusable component
- `_freeform`: fields for freeform plugins
- `_includes`: simple includes (like favicon)
- `_inlinejs`: scripts that are being used inline for loading js and css async
- `_layouts`: the basic settings and layout files
- `_macros`: reusable macros, usable in templates
- `_partials`: smaller parts of components
- `styleguide`: WIP - dynamic styleguide

The rest of the folders are subfolders for specific channels or structures.
