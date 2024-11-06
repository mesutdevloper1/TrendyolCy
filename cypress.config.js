const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('cypress-webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      const webpackOptions = {
        resolve: {
          extensions: ['.ts', '.js'],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              use: 'ts-loader',
            },
          ],
        },
      };

      on('file:preprocessor', createBundler({ webpackOptions }));

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://www.trendyol.com',
  },
});
