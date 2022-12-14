const path = require("path")
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "../../build"),
    filename: 'static/js/[name].js',
    assetModuleFilename: "static/assets/[hash][ext][query]",
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/'
  },
  stats: {
    all: undefined,
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    open: true,
    hot: true,
    compress: true,
    port: 44330,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
}
);
