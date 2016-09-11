/* eslint no-console: 0 */
const express = require('express');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const production = process.env.NODE_ENV === 'production';
const dist = path.join(__dirname, '/..', '/dist');

if (production) {
  app.use(historyApiFallback({}));
  app.use(express.static(dist));

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

console.log('Starting server on port: ' + port + ' \nin ' + (production ? 'production' : 'development') + ' mode\nfrom ' + dist);

app.listen(port);
