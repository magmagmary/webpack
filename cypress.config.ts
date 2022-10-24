import { defineConfig } from 'cypress';
import webpackConfig from './webpack.config';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
    specPattern: './cypress/component',
    setupNodeEvents() {
      //
    },
  },

  e2e: {
    setupNodeEvents() {
      //
    },
  },
});
