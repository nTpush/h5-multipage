const path = require('path');
const fs = require('fs'); //fs是node.js的核心模块，不用下载安装，可以直接引入
const webpack = require('webpack');
const chalk = require('chalk');
const csv = require('csv');

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line){
    switch(line.trim()) {
        case 'copy':
            console.log("复制");
            break;
        case 'hello':
            rl.write("Write");
            console.log('world!');
            break;
        case 'close':
            rl.close();
            break;
        default:
            console.log('没有找到命令！');
            break;
    }
});
rl.on('close', function() {
    console.log('bye bye');
    process.exit(0);
});

// console.log(argvStr, 123)
// // 如果未指定编译模块，则提示返回
// if (argvStrArr.length === 0) {
//   console.log(chalk.yellow('[warning]: You have not specify a module to new, you can run "npm run new [module]"'));
//   return false;
// }

//1. fs.stat  检测是文件还是目录  fs.statSync()同步获取stats对象,通过返回值接收。
// fs.stat(path.resolve(`src/pages/${argvStr}`), function (error, stats) {
//   if (error) {
//     Promise.all([makePage(), makeJs(), makeCSS()]).then(res => {
//       console.log(chalk.green('[success]: 创建成功！'));
//     })
//
//     return false
//   }
//   if (stats.isDirectory()) {
//     console.log(chalk.blue('[warning]: 目录已存在！'));
//     return false
//   }
// })
//
// function makePage() {
//   return new Promise((resolve, reject) => {
//     let content = fs.readFileSync(path.resolve('template/index.html'))
//     fs.mkdir(path.resolve(`src/pages/${argvStr}`), function (err) {
//       if (err) {
//         return console.error(err);
//       }
//       fs.writeFile(path.resolve(`src/pages/${argvStr}/index.html`), content, 'utf8', function (error) {
//         if (error) {
//           console.log(error);
//           return false;
//         }
//         resolve()
//       })
//     });
//
//   })
// }
//
// function makeJs() {
//   return new Promise((resolve, reject) => {
//     let content = fs.readFileSync(path.resolve('template/index.js'))
//     fs.mkdir(path.resolve(`src/js/${argvStr}`), function (err) {
//       if (err) {
//         return console.error(err);
//       }
//       fs.writeFile(path.resolve(`src/js/${argvStr}/index.js`), content, 'utf8', function (error) {
//         if (error) {
//           console.log(error);
//           return false;
//         }
//         resolve()
//       })
//     });
//
//   })
// }
//
// function makeCSS() {
//   return new Promise((resolve, reject) => {
//     let content = fs.readFileSync(path.resolve('template/index.css'))
//     fs.mkdir(path.resolve(`src/css/${argvStr}`), function (err) {
//       if (err) {
//         return console.error(err);
//       }
//       fs.writeFile(path.resolve(`src/css/${argvStr}/index.css`), content, 'utf8', function (error) {
//         if (error) {
//           console.log(error);
//           return false;
//         }
//         resolve()
//       })
//     });
//   })
// }
