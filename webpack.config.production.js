const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './build/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('index.[hash].css', {
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/i,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader")
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/i,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.json$/i,
        loader: 'json-loader'
      }
    ]
  },
};
