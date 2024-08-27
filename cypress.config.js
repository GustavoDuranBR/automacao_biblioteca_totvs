/**
 * Configurações do Cypress
 * Autor: Gustavo Duran
 * Data: 14 de julho de 2024
 */

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "http://localhost:4200",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", (file) => {
        return cucumber()(file);
      })
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    browser: 'chrome',
    env: {
      tags: '@login or @api and not @ignore'
    }
  }
});
