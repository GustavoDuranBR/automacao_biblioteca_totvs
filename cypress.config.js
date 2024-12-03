const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process'); // Importando exec para rodar o script Python
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // Certificar-se de que o diretório de resultados e relatórios existe antes dos testes
      on('before:run', () => {
        const resultsDir = path.join(__dirname, 'cypress/results');
        if (!fs.existsSync(resultsDir)) {
          fs.mkdirSync(resultsDir, { recursive: true });
        }

        // Caso você tenha um diretório específico para relatórios, crie-o aqui
        const reportsDir = path.join(__dirname, 'cypress/reports');
        if (!fs.existsSync(reportsDir)) {
          fs.mkdirSync(reportsDir, { recursive: true });
        }
      });

      // Configurar o preprocessador de Cucumber
      on('file:preprocessor', cucumber());

      // Configurar extensões do navegador (se necessário)
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          const extensionPath = "C:\\Users\\luiz.gleite\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\eimadpbcbfnmbkopoojfekhnkhdbieeh\\4.9.92_0";
          launchOptions.args.push(`--load-extension=${extensionPath}`);
        }
        return launchOptions;
      });

      // Rodar o script Python após a execução dos testes
      on('after:run', (results) => {
        try {
          // Executar o script Python após a execução dos testes
          exec('python C:\\QAx\\automacao_biblioteca_totvs\\merge-reports.py', (error, stdout, stderr) => {
            if (error) {
              console.error(`Erro ao executar o script Python: ${error.message}`);
              return;
            }
            if (stderr) {
              console.error(`stderr: ${stderr}`);
              return;
            }
            console.log(`stdout: ${stdout}`);
            console.log('Relatórios combinados com sucesso!');
          });
        } catch (error) {
          console.error('Erro ao rodar o script Python após os testes:', error);
        }
      });
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    browser: 'chrome',

    // Configuração do Mochawesome como repórter
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',  // Diretório onde os relatórios JSON serão salvos
      overwrite: false,
      html: false,
      json: true,
      inline: true,
    },

    // Variáveis de ambiente
    env: {
      tags: '@login or @api and not @ignore',
      frontendUrl: "http://localhost:4200",
      backendUrl: "http://localhost:3000",
    }
  }
});
