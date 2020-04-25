/* config-overrides.js */
const StatsPlugin = require('stats-webpack-plugin')
const {
  override,
  addWebpackPlugin,
  setWebpackPublicPath,
} = require('customize-cra')
module.exports = override(
  setWebpackPublicPath('//localhost:3000/'),
  addWebpackPlugin(
    new StatsPlugin('./appReact/manifest.json', {
      chunkModules: false,
      entrypoints: true, // 只使用这个字段
      source: false,
      chunks: false,
      modules: false,
      assets: false,
      children: false,
      exclude: [/node_modules/],
    })
  ),
  (config) => {
    config.output.library = 'singleReact'
    config.output.libraryTarget = 'window'
    return config
  }
)
