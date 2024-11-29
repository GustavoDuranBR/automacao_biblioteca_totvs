// Passo para requisição GET
Given('faço uma requisição GET para a rota {string}', (rota) => {
  cy.request(Cypress.env('backendUrl') + rota).as('response');
});

// Passo para requisição POST
When('faço uma requisição POST para a rota {string} com o corpo:', (rota, corpo) => {
  cy.request('POST', Cypress.env('backendUrl') + rota, JSON.parse(corpo)).as('response');
});

// Passo para validar o status da resposta
Then('a resposta deve ter o status {int}', (status) => {
  cy.get('@response').its('status').should('eq', status);
});

// Passo para verificar se a resposta é uma lista de autores
Then('a lista de autores deve ser retornada', () => {
  cy.get('@response').its('body').should('be.an', 'array');
});

// Passo para verificar se o autor retornado é o esperado
Then('o autor {string} deve ser retornado na resposta', (nome) => {
  cy.get('@response').then((response) => {
    cy.log('Resposta da API:', JSON.stringify(response.body)); // Log para depuração
    // Verificar se a estrutura da resposta possui 'nome'
    if (response.body && response.body.nome) {
      cy.wrap(response.body.nome).should('eq', nome);
    } else {
      // Logar a resposta para entender o que está sendo retornado
      cy.log('Estrutura da resposta:', JSON.stringify(response.body));
    }
  });
});

// Passo para verificar se existe um autor específico na lista de autores
Given('que existe um autor com o nome {string} na lista', (nome) => {
  cy.request('GET', Cypress.env('backendUrl') + '/autores').then((response) => {
    const autorExistente = response.body.find((autor) => autor.nome === nome);
    if (autorExistente) {
      cy.wrap(autorExistente).as('autorExistente');
    }
  });
});

// Passo para realizar uma requisição PUT para atualizar o autor
When('faço uma requisição PUT para a rota {string} com o corpo:', (rota, corpo) => {
  cy.get('@autorExistente').then((autor) => {
    const id = autor._id;
    cy.request('PUT', Cypress.env('backendUrl') + rota.replace('{id}', id), JSON.parse(corpo)).as('response');
  });
});

// Passo para verificar se o autor foi atualizado corretamente
Then('o autor {string} deve ser retornado na resposta', (nome) => {
  cy.get('@response').then((response) => {
    cy.log('Resposta da API após atualização:', JSON.stringify(response.body)); // Log para depuração
    cy.wrap(response.body.nome).should('eq', nome);
  });
});

// Passo para realizar uma requisição DELETE para deletar o autor
When('faço uma requisição DELETE para a rota {string}', (rota) => {
  cy.get('@autorExistente').then((autor) => {
    const id = autor._id;
    cy.request('DELETE', Cypress.env('backendUrl') + rota.replace('{id}', id)).as('response');
  });
});

// Passo para verificar se o autor foi deletado com sucesso
Then('o autor {string} não deve existir mais na lista', (nome) => {
  cy.request('GET', Cypress.env('backendUrl') + '/autores').then((response) => {
    const autorDeletado = response.body.find((autor) => autor.nome === nome);
    expect(autorDeletado).to.be.undefined;
  });
});
