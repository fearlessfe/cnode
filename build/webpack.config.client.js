const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

function resolvePath(filePath) {
  return path.join(__dirname, filePath);
}

const config = webpackMerge(baseConfig, {
  entry: {
    app: resolvePath('../client/main.js')
  },
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new HTMLPlugin({
      template: resolvePath('../client/template.html')
    })
  ]
})

if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
  // https://www.webpackjs.com/guides/hot-module-replacement/
  // config.plugins.push(new webpack.NamedModulesPlugin())
  // config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
