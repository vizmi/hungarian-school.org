/* eslint no-console: 0 */
const express = require('express');
const historyApiFallback = require('connect-history-api-fallback');

const app = express();
const port = process.env.PORT || 3000;

var production = process.env.NODE_ENV === 'production';

if (production) {
  app.use(historyApiFallback({}));
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: '../dist' });
  });

} else {
  app.use(historyApiFallback({
    verbose: true
  }));
  const webpack = require('webpack');
  const config = require('../webpack.config');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.listen(port);
