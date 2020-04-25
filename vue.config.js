module.exports = {
  devServer: {
    contentBase: './',
    compress: true,
    proxy: {
      '/appVue': {
        target: 'http://127.0.0.1:4000/',
        ws: false,
        changeOrigin: true,
      },
      '/appReact': {
        target: 'http://localhost:3000/',
        ws: false,
        changeOrigin: true,
      },
    },
  },
}
