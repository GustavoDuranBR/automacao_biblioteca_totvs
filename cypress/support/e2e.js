// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:
import './commands'

// Adiciona interceptação para fechar a página de boas-vindas do Dark Reader
beforeEach(() => {
  // Intercepta qualquer página de ajuda do Dark Reader que abrir
  cy.window().then((win) => {
    const pageToClose = "https://darkreader.org/help"; // URL da página que está abrindo
    win.open = cy.stub().as("windowOpen"); // Intercepta qualquer tentativa de abrir nova janela

    // A cada novo teste, verifique se a aba do Dark Reader foi aberta
    cy.get("@windowOpen").should((stub) => {
      const urls = stub.args.map((arg) => arg[0]);
      if (urls.includes(pageToClose)) {
        // Fecha a aba do Dark Reader se ela for aberta
        win.close();
      }
    });
  });
});
