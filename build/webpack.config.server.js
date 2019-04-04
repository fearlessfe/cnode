const path = require('path')
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')


function resolvePath(filePath) {
  return path.join(__dirname, filePath);
}

module.exports = webpackMerge(baseConfig, {
  target: 'node',
  entry: {
    app: resolvePath('../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  }
})
