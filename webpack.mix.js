const mix = require('laravel-mix');
const glob = require('glob-all');
require('laravel-mix-purgecss');

let tailwindcss = require('tailwindcss')

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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('tailwind.config.js') ],
    })
    .purgeCss();

mix.copy('./node_modules/@fortawesome/fontawesome-free/webfonts/**', 'public/fonts/font-awesome');

if (mix.inProduction()) {
  mix.sourceMaps().version();
}
