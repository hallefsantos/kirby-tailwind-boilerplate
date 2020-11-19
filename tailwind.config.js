module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: [
    './resources/js/**/*.js',
    './site/plugins/**/*.js',
    './site/plugins/**/*.php',
    './site/snippets/**/*.php',
    './site/templates/**/*.php',
  ],
}
