import HomePage from "../pages/home_page";
const homePage = new HomePage();

Given(/^eu esteja na página Home$/, () => {
    homePage.acessarHomePage();
});

When(/^clico na opção Cadastro de Autores no menu lateral$/, () => {
    homePage.selecionarCadastroAutorWidget();
});

When(/^sou direcionado para a página Cadastro Autor$/, () => {
    cy.get('app-root app-home po-page-default po-page po-page-content app-author > div > h2')
        .should('contain.text', 'Cadastro de Autor');
});

When(/^clico no campo Nome do Autor$/, () => {
    cy.get('[data-cy=nameAuthor]').click();
});

When(/^preencho o campo selecionado com o nome "([^"]*)"$/, (nome) => {
    cy.get('[data-cy=nameAuthor]').type(nome);
});

When(/^clico no campo Nacionalidade$/, () => {
    cy.get('[data-cy=nacionalidadeAuthor]').click();
});

When(/^preencho o campo selecionado com a nacionalidade "([^"]*)"$/, (nacionalidade) => {
    cy.get('[data-cy=nacionalidadeAuthor]').type(nacionalidade);
});

// Cenário: Cadastrar Autor sem preencher o campo Nacionalidade
When(/^deixo o campo Nacionalidade em branco$/, () => {
    cy.get('[data-cy=nacionalidadeAuthor] input').clear();
});

// Cenário: Cadastrar Autor sem preencher o campo Nome do Autor
When(/^deixo o campo Nome do Autor em branco$/, () => {
    cy.get('[data-cy=nameAuthor] input').clear();
});

// Cenário: Cadastrar Autor sem preencher os campos
When(/^deixo os campos Nome do Autor e Nacionalidade em branco$/, () => {
    cy.get('[data-cy=nameAuthor] input').clear();
    cy.get('[data-cy=nacionalidadeAuthor] input').clear();
});

When(/^clico no botão Salvar$/, () => {
    cy.get('[data-cy=btnSave]').click();
});

Then(/^o sistema exibe a mensagem "([^"]*)"$/, (mensagem) => {
    cy.contains(mensagem).should('be.visible');
});
