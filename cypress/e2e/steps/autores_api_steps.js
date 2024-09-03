Given('faço uma requisição GET para a rota {string}', (rota) => {
    cy.request(Cypress.env('backendUrl') + rota).as('response')
  });
  
  When('faço uma requisição POST para a rota {string} com o corpo:', (rota, corpo) => {
    cy.request('POST', Cypress.env('backendUrl') + rota, JSON.parse(corpo)).as('response')
  });
  
  Then('a resposta deve ter o status {int}', (status) => {
    cy.get('@response').its('status').should('eq', status)
  });
  
  Then('a lista de autores deve ser retornada', () => {
    cy.get('@response').its('body').should('be.an', 'array')
  });
  
  Then('o autor {string} deve ser retornado na resposta', (nome) => {
    cy.get('@response').its('body.nome').should('eq', nome);
  });
  