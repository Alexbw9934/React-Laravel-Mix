let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.js('resources/js/index.js', 'dist/js')
    .react()
    .extract(['react'])
    .sass('resources/scss/app.scss', 'dist/css')
    .postCss('resources/css/app.css', 'dist/css', [
        require('tailwindcss'),
    ])
    .options({
        processCssUrls: false
    })
    .version();