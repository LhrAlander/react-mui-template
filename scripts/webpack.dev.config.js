const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { resolve } = require('./utils');
const baseCfg = require('./webpack.base.config');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devCfg = {
  ...baseCfg,
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'steamManager',
      template: resolve('../src/index.html'),
      path: resolve('../dist')
    }),
    new Webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    compress: true,
    port: 2345,
    open: true,
  }
}

module.exports = devCfg;
