module.exports = {
  tabWidth: 2, // 2个空格缩进
  singleQuote: true, // 用单引号
  trailingComma: 'es5', // 当多行时，尽可能地打印尾随逗号
  printWidth: 100, // 换行字符串阈值
  semi: true, // 句末加分号;
  jsxBracketSameLine: true, // jsx中最后的‘>’标签不换行
  arrowParens: 'avoid', // 箭头函数如果只有一个参数不加括号 x => {}
  bracketSpacing: true, // 对象中间留空格 { foo: bar }
  overrides: [
    {
      files: '.prettierrc.js',
    },
  ],
};
