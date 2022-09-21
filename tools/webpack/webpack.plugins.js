const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = [
  new CleanWebpackPlugin(),
  new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: "webpack app",
    template: path.resolve(__dirname, "../../src/index.html"),
    favicon: path.resolve(__dirname, "../../src/assets/images/logo.png"),
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[name].[chunkhash].chunk.css',
  }),
];
