const path = require('path')

module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  // 识别测试文件, glob -- 简化版的正则  与testMatch二选一
  testMatch: ['**/?(*.)(spec|test).js?(x)'],

  // 识别测试文件， 正则
  // testRegex: '**/test/*.test.js', // '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',

  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.html$': '<rootDir>/test/utils/htmlLoader.js',
    '^.+\\.(sc|c)ss$': '<rootDir>/test/__mocks__/styleMock.js'
  },

  // 匹配模块名称
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  // 测试环境
  // testEnvironment: 'jsdom', // node

  // 根目录 默认值是，package.json所在目录， 没有package.json, 则为pwd
  rootDir: path.resolve(__dirname, '..'),

  snapshotSerializers: [ 'jest-serializer-html' ],
  // 模块文件扩展名， 指什么文件需要测试
  // moduleFileExtensions: ['js', 'json', 'jsx', 'node'],

  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**'
  ]
}
