const StatsPlugin = require('stats-webpack-plugin')
module.exports = {
  publicPath: '//localhost:4000/',
  css: {
    extract: false,
  },
  configureWebpack: {
    devtool: 'none',
    output: {
      library: 'singleVue',
      libraryTarget: 'window',
    },
    plugins: [
      // https://www.webpackjs.com/configuration/stats/
      new StatsPlugin('./appVue/manifest.json', {
        chunkModules: false,
        entrypoints: true, // 只使用这个字段
        source: false,
        chunks: false,
        modules: false,
        assets: false,
        children: false,
        exclude: [/node_modules/],
      }),
    ],
  },
  devServer: {
    contentBase: './',
    compress: true,
  },
}
