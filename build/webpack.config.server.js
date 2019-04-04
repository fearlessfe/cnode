const path = require('path')

function resolvePath(filePath) {
  return path.join(__dirname, filePath);
}

module.exports = {
  mode: 'development',
  target: 'node',
  resolve: {
    extensions: ['.js','.jsx']
  },
  entry: {
    app: resolvePath('../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    path: resolvePath('../dist'),
    publicPath: '/public',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
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
