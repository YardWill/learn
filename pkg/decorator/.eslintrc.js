module.exports = {
  extends: [
    'eslint-config-alloy/typescript',
  ],
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值
  },
  rules: {
    // 这里填入你的项目需要的个性化配置
    'comma-dangle': ['error', 'always-multiline'], // 对象末尾逗号 
    'prefer-template': 'error', // 自动转成es6模板
  },
};