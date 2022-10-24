import startDevServer from '@cypress/webpack-dev-server';
import webpackConfig from '../../webpack.config.js';
import webpack from '@cypress/webpack-preprocessor';

module.exports = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) => {
  const options = {
    webpackOptions: webpackConfig,
    watchOptions: {},
  };
  on('file:preprocessor', webpack(options));
  on('dev-server:start', async (options) => startDevServer(options));
  return config;
};
