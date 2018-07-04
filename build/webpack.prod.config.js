const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(path.resolve('../dist'));
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: 'production',
  entry: {
    jdialog: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'jdialog',
    libraryTarget: 'umd',
    libraryExport: "default"
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.js?$/,
      //   exclude: /node_modules/,
      //   loader: 'babel'
      // },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    /**
     * 清除目标目录
     */
    new CleanWebpackPlugin(['dist', 'examples'], {
      root: path.resolve(__dirname, '..'),
      verbose:  true,
      dry:      false
    }),

    new HtmlWebpackPlugin({
      title: 'jDialog',
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html')
    })
  ]
};