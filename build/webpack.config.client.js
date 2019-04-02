const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

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

if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    // hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
}

module.exports = config