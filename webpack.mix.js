let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/js/index.js', 'dist/drawerr.js')
    .babel('dist/drawerr.js', 'dist/drawerr.js')
    .sass('src/scss/drawerr.scss', 'dist/drawerr.css');
