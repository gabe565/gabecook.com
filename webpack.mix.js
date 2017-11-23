let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
    'popper.js/dist/umd/popper.js': ['Popper']
})
    .js('assets/js/app.js', 'public/js')
    .extract(['axios', 'bootstrap', 'lodash', 'popper.js', 'jquery', 'jquery.easing', 'vue'])
    .sass('assets/sass/app.scss', 'public/css')
    .sourceMaps()
    .setPublicPath('public')
