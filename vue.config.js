module.exports = {
  devServer: {
    contentBase: './',
    compress: true,
    proxy: {
      '/app-vue': {
        target: 'http://127.0.0.1:3000/',
        ws: false,
        changeOrigin: true,
      },
    },
  },
}
