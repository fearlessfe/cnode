const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development'

function resolvePath(filePath) {
  return path.join(__dirname, filePath);
}

config = {
  mode: 'development',
  resolve: {
    extensions: ['.js','.jsx']
  },
  entry: {
    app: resolvePath('../client/main.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: resolvePath('../dist'),
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.jsx$/,
        loader: 'eslint-loader',
        exclude: [
          resolvePath('../node_modules')
        ]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /js$/,
        loader: 'babel-loader',
        exclude: [
          resolvePath('../node_modules')
        ]
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: resolvePath('../client/template.html')
    })
  ]
}

if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
  // https://www.webpackjs.com/guides/hot-module-replacement/
  // config.plugins.push(new webpack.NamedModulesPlugin())
  // config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config