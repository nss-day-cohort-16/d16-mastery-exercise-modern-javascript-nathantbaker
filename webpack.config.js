const path = require('path');

module.exports = {
  entry: "./app/js/controller.js",
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'}
    ]
  },
  resolve: {
    alias: {
      'jquery': '../node_modules/jquery/src/jquery.js'
    }
  }
};