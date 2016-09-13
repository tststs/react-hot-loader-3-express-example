const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

const isDevelopment = process.argv.indexOf('--development') !== -1;

if (isDevelopment) {

  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');

  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {

    hot: true,
    stats: {

      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));

} else {

  app.use(express.static(__dirname + '/public'));
}

app.get('*', function (request, response) {

  response.sendFile(__dirname + '/public/index.html');
});

app.listen(port);

console.log(`server started on port: ${port}`);
