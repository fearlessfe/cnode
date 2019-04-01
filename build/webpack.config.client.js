const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

function resolvePath(filePath) {
  return path.join(__dirname, filePath);
}

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js','.jsx']
  },
  entry: {
    app: resolvePath('../client/app.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: resolvePath('../dist'),
    publicPath: '/public'
  },
  module: {
    rules: [
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