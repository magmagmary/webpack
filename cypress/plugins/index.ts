const { startDevServer } = require('@cypress/webpack-dev-server');
const baseWebpackConfig = require('../../webpack.config');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

const webpackConfig = {
  ...webpackPreprocessor.defaultOptions.webpackOptions,
  resolve: baseWebpackConfig.resolve,
  module: {
    rules: baseWebpackConfig.module.rules,
  },
  plugins: baseWebpackConfig.plugins,
};

module.exports = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) => {
  on('dev-server:start', async (options) =>
    startDevServer({
      options,
      webpackConfig,
    }),
  );
  on(
    'file:preprocessor',
    webpackPreprocessor({ webpackOptions: webpackConfig, watchOptions: {} }),
  );

  return config;
};
