var path = require('path');

module.exports = {
  entry: {
    bundle: './app/components/main.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
