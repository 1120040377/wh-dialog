const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve (dir = '') {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: 'production',
  entry: {
    jdialog: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
    library: 'jdialog',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
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
          { loader: MiniCssExtractPlugin.loader },
          // { loader: "style-loader" }, styleloader和上面的取一个
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: resolve('postcss.config.js')
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    /**
     * 清除目标目录
     */
    new CleanWebpackPlugin(['dist', 'examples'], {
      root: path.resolve(__dirname, '..'),
      verbose: true,
      dry: false
    }),

    new HtmlWebpackPlugin({
      title: 'jDialog',
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html')
    }),

    new MiniCssExtractPlugin({
      // filename: 'css/[name].[contenthash].css'
      filename: '[name].min.css'
    })
  ]
}
