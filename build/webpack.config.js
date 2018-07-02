const path = require('path')

console.log(path.resolve('../dist'));
module.exports = {
  mode: 'development',
  entry: {
    jdialog: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  }
};