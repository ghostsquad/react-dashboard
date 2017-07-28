module.exports = ({file, options, env}) => ({
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': options.cssnext ? {} : false,
    'postcss-browser-reporter': {},
    'postcss-reporter': {}
  }
})