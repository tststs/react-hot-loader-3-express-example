var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isDevelopment = process.argv.indexOf('--development') !== -1;

var entryPath = path.join(__dirname, 'app/app.js');
var entry = isDevelopment ? [
  'webpack-hot-middleware/client?reload=true',
  'react-hot-loader/patch',
  entryPath
] : entryPath;

var plugins = [

  new webpack.DefinePlugin({

    'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
    __DEV__: isDevelopment
  }),
  new HtmlWebpackPlugin({

    template: 'app/index.ejs',
    minify: {

      removeComments: !isDevelopment,
      collapseWhitespace: !isDevelopment
    },
    inject: true
  })
];

isDevelopment && plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = {

  cache: isDevelopment,
  debug: isDevelopment,
  entry: entry,
  module: {

    loaders: [{

      test: /\.jsx?$/,
      loaders: ['jsx', 'babel-loader'],
      exclude: /node_modules/
    }]
  },
  output: {

    path: path.join(__dirname, 'public'),
    publicPath: '',
    filename: 'bundle.js'
  },
  plugins: plugins
};
