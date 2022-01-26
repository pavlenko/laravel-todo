const mix = require('laravel-mix');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
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

mix.extract(['vue', 'jquery', 'axios']);

mix
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        resolve: {
            alias: {
                jQuery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new Visualizer()
        ],
    })
;
