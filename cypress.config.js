/**
 * Configurações do Cypress
 * Autor: Gustavo Duran
 * Data: 14 de julho de 2024
 */

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const path = require("path");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          const extensionPath = "C:\\Users\\luiz.gleite\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\eimadpbcbfnmbkopoojfekhnkhdbieeh\\4.9.92_0";
          launchOptions.args.push(`--load-extension=${extensionPath}`);
        }
        return launchOptions;
      });
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    browser: 'chrome',
    env: {
      tags: '@login or @api and not @ignore',
      frontendUrl: "http://localhost:4200",
      backendUrl: "http://localhost:3000"
    }
  }
});
