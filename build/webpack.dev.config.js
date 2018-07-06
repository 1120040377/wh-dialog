const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve (dir = '') {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: 'development',
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
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loader: 'style-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'jDialog',
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html')
    }),
  ]
};