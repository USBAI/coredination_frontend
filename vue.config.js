const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
      }),
    ],
  },
  devServer: {
    proxy: {
      '/coredination': {
        target: 'https://corediantion-41cd1258aadd.herokuapp.com/', // Django backend running on localhost
        changeOrigin: true,
        pathRewrite: { '^/coredination': '/coredination' },
      },
    },
  },
});
