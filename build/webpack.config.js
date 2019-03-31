const path = require('path')

function resolvePath(filePath) {
  return path.join(__dirname, filePath);
}

module.exports = {
  entry: {
    app: resolvePath('../client/app.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: resolvePath('../dist'),
    publicPath: ''
  }
}