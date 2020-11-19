const mix = require('laravel-mix')

mix
  .js('resources/js/main.js', 'assets/js/main.js')
  .postCss('resources/css/main.css', 'assets/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ])
