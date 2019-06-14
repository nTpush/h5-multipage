// 带 * 的为必填项
module.exports = {
  type: 'h5',
  // 各环境配置
  env: {
    dev: {
      // 环境名 例: abc.timeqie.cn
      name: 'm.timeqie.cn',
      // 发布服务地址 例: http://pub.timeqie.cn
      pubUrl: 'http://pub.timeqie.cn',
      // 申请应用时生成的 Key
      key: 'VFdrCnM41aFbKfv4cb7b6y'
    },
    test: {
      name: 'app.timeqie.cn',
      pubUrl: 'http://127.0.0.1:7001',
      key: 'VFdrCnM41aFbKfv4cb7b6y',
    },
    pro: {
      name: 'm.timeqie.com',
      pubUrl: 'http://pub.timeqie.com',
      key: '3nQj6w9qowVbLUvYSrrzEJ'
    }
  },
  // 上传配置
  upload: {
    server: 'qn',               // * 阿里云：ali 七牛云: qn
    config: {
      accessKeyId: 'MumaT-qdG6AKg-e1eDxrosWwsGDwraC440i4ph7A',        // * CDN 的应用ID
      accessKeySecret: 'Iy5ddtKybIRrDwpqAgHFlsVhbYJj3i571sErXJrM',    // * CDN 的应用Secret
      bucket: 'publish',             // * 空间名称
      dir: 'dist',                // * 需要上传的本地目录名
      region: '',             // bucket 所在的区域
      ignoreDir: false,
      deduplication: true,
      ignoreSuffix: 'html',
      prefix: 'website',     // CDN资源前缀，可以为空
    }
  }
}