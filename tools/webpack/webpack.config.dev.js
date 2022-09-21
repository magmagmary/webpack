const path = require("path")

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, "../../src/index.tsx")
  },
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    path: path.resolve(__dirname, "../../build"),
    filename: '[name].js',
    assetModuleFilename: "images/[hash][ext][query]",
    chunkFilename: '[name].chunk.js',
  },
  plugins: require('./webpack.plugins'),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      // React Hot Loader Patch
      'react-dom': '@hot-loader/react-dom',
      // Custom Aliases
      ...require('./webpack.aliases'),
    },
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
};
