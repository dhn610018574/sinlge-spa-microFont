module.exports = {
  plugins: {
    'postcss-selector-namespace': {
      namespace(css)  {
        if(css.includes('element-variables.scss')) {
          return ''
        }
        return '.single-spa-vue'
      }
    }
  }
}