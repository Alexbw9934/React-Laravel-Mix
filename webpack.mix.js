let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
// let path = require('path');

mix.js('resources/js/index.js', 'dist/js')
    .react()
    .extract(['react'])
    .sass('resources/scss/app.scss', 'dist/css')
    .postCss('resources/css/app.css', 'dist/css', [
        require('tailwindcss'),
    ])
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwindcss.config.js')],
    })
    // .browserSync({
    //     proxy: 'localhost:8000',
    // })
    // .webpackConfig({
    //     resolve: {
    //         modules: [
    //             'node_modules',
    //             path.resolve(__dirname, 'vendor/laravel/spark/resources/assets/js')
    //         ]
    //     }
    // })
    .version();