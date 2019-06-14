var webpackCommon = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const { styleLoader } = require('./webpack.until.js')
const cfg = require('./webpack.cfg.js')

module.exports = (env, argv) => {

  return merge(webpackCommon(env, argv), {
    mode: 'development', // 当mode值为'production'时，webpack-dev-server 变动刷新反应很慢
    devtool: 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.(css|scss|sass|less)$/,
          use:['style-loader'].concat(styleLoader)
        }
      ]
    },
      devServer: {
        port: 8080,
        compress: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        proxy: cfg.dev.proxy
    }
  })
};
