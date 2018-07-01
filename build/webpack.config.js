const path = require('path')

module.exports = {
  entry: {
    jdialog: '../src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  }
};