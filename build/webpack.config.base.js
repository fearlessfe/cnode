const path = require('path')

function resolvePath (filePath) {
  return path.join(__dirname, filePath)
}

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': resolvePath('../client/'),
      Build: resolvePath('../build')
    }
  },
  output: {
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
  }
}
