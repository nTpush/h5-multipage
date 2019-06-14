# [webpack-multi-page](https://github.com/lfyfly/webpack-multi-page)


# H5构建工具

## 相关命令

- npm run dev 运行

- npm run build 打包

- node webpack.dist.js  【包名】 按模块打包

## 相关支持

- 结构 (Structure)

    - .pug

    - .html

    - .vue

- 表现 (Presentation)

    - scss

    - less

- 行为 (Behavior)

    - es5、es6

## 其他说明

- 支持代理配置

- 新增页面，需要重新运行`npm run dev`

- html，css，js 更改自动刷新

- 支持px2rem

- 页面共有css文件入口支持

```
commonCss:{
    entry: path.resolve(__dirname,'src/common_css_entry.js'), // String 必填，入口文件，绝对地址
    exclude:['about'] // Arrary 排除页面，不填所有页面都引入common_css
    // ['about'] 代表about页面不引用 common_css
  },
```
