const path = require('path')
module.exports = {
  commonCss: {
    entry: path.resolve(__dirname, 'src/common_css_entry.js'), // String 必填，绝对地址
    exclude: ['about'] // Arrary 排除页面，不填所有页面都引入common_css
  },
  px2rem: {
    remUni: 100,
    remPrecision: 6
  },
  dev: {
    assetsPublicPath: 'http://127.0.0.1:8080/', // 资源公共路径
    proxy: { // 代理

      "/wx/api": {
        // target: 'http://47.97.126.105:8083',
        target: 'http://47.111.29.2:8083',
        changeOrigin: true,
      },
    }
  },
  build: {
    assetsPublicPath: '/h5', // 也可是cdn地址
    assetsSubDirectory: 'static', // 打包后资源路径
    productionSourceMap: false // 打包生成sourceMap
  }
}