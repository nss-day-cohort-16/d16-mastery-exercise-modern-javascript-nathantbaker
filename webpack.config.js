const path = require('path');

module.exports = {
  entry: "./app/js/controller.js",
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
    resolveLoader: {
      root: path.resolve(__dirname, 'app/node_modules')
  },
  module: {
    preLoaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      { test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    alias: {
      'jquery': '../node_modules/jquery/src/jquery.js'
    }
  },
  jshint: {
    strict: "global"
  }
};