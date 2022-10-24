import { startDevServer } from '@cypress/webpack-dev-server';
import webpackConfig from '../../webpack.config.js';

module.exports = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) => {
  on('dev-server:start', async (options) =>
    startDevServer({ options, webpackConfig }),
  );
  return config;
};
