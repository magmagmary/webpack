const path = require("path")
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "../../build"),
    filename: '[name].js',
    assetModuleFilename: "images/[hash][ext][query]",
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  stats: {
    all: undefined,
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
    hot: true,
    compress: true,
    port: 3000,
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
