const path = require('path')
var fs = require("fs")
const ora = require('ora')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin   = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const chalk = require('chalk');
// 出现加载标示
const spinner = ora('正在打包请稍后...')
const argvStrArr = process.argv.toString().split(',').slice(2);
const argvStr = argvStrArr[0]

if (argvStrArr.length === 0) {
  console.log(chalk.yellow('[warning]: 模块名不能为空哦!'));
  return false;
}

if (!fs.existsSync(path.resolve('src/pages/' + argvStr))) {
  console.log(chalk.yellow('[warning]: 模块名不存在！！'));
  return false;
}

//构建入口文件
function getEngrys(root) {
  let entrys = {}
  readDirSync(root)
  function readDirSync(path){
      var pa = fs.readdirSync(path);
      pa.forEach(function(ele,index){
          var info = fs.statSync(path+"/"+ele)
          if(info.isDirectory()){
              readDirSync(path+"/"+ele);
          }else{
            entrys[ele.split('.')[0]]= './src/js/' + argvStr + '/' + ele
          }
      })
  }
  return entrys;
}


//构建模板文件
function getHtmls(root) {
  let htmls = []
  readDirSync(root)
  function readDirSync(path){
      var pa = fs.readdirSync(path);
      pa.forEach(function(ele,index){
          var info = fs.statSync(path+"/"+ele)
          if(info.isDirectory()){
              readDirSync(path+"/"+ele);
          }else{
            htmls.push(
              new HtmlWebpackPlugin({
                  template: `./src/pages/${argvStr}/${ele}`,//只增加了这行
                  filename: ele,
                  chunks: [ele.split('.')[0]]
              }),
            )
            // entrys[ele.split('.')[0]]= ele
          }
      })
  }
  return htmls;
}

// return false
spinner.start()
let config  = {
    mode:"production",
    entry: {
      common_css: path.resolve(__dirname, 'src/common_css_entry.js'),
      ...getEngrys(path.resolve('src/js/'+argvStr))
      // a:'./src/js/english/a.js',
      // b:'./src/js/english/b.js',
      // two:'./src/2.js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json']
    },
    externals: {
    },
    output: {
      filename:'js/[name].[chunkhash].js', //可以以name/id/hash放在中括号里区分文件名
      path:path.resolve(__dirname,'build/' + argvStr),
      publicPath: './'
    },
    module: {
      rules: [
            {
                test: /\.html$/,
                use: {
                  loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  use: ['css-loader', 'postcss-loader']
                })
            },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8 * 1024,
                  name: `img/[name]-[hash:7].[ext]`,
                }
              }
            ]
        },
        {
          test: /\.(woff|svg|eot|ttf)\??.*$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'url-loader',
            options: {
              name: `font/[name].[hash:7].[ext]`,
              limit: 8192
            }
          }
        },

        ]
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new ExtractTextPlugin('css/[name].[chunkhash].css'),
      // new CleanWebpackPlugin('./dist'),
      ...getHtmls(path.resolve('src/pages/'+argvStr))
      // new HtmlWebpackPlugin({
      //     template: './src/pages/english/a.html',//只增加了这行
      //     filename: 'a.html',
      //     chunks: ['a', 'common_css']
      // }),
      // new HtmlWebpackPlugin({
      //     template: './src/pages/english/b.html',//只增加了这行
      //     filename: 'b.html',
      //     chunks: ['b', 'common_css']
      // }),
    ]
}



webpack(config, (err, stats) => {
    // 加载标识结束
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  打包失败喽.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  哈哈~打包成功.\n'))
    // console.log(chalk.yellow(
    //   '  Tip: built files are meant to be served over an HTTP server.\n' +
    //   '  Opening index.html over file:// won\'t work.\n'
    // ))
  })
