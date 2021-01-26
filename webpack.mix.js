let mix = require('laravel-mix');

mix.sass('resources/scss/app.scss', 'public/css/app.css');
mix.js('resources/js/app.js', 'public/js/app.js');


mix.babelConfig({
    "plugins": ["@babel/plugin-proposal-class-properties"]
});