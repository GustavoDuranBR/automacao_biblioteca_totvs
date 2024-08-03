/// <reference types="Cypress" />

import LoginPage from "../pages/login_page";

const loginPage = new LoginPage();

// Cenário: Acesso com sucesso
Given('que eu queira acessar a Biblioteca TOTVS', () => {
  loginPage.acessarHomePage();
})

When('eu inserir o login {string} e senha {string}', (login, senha) => {
  loginPage.preencherLogin(login, senha);
})

When('clicar no botão entrar', () => {
  cy.wait(2000);
  loginPage.clicarBtn();
})

Then('tenho o acesso realizado com sucesso', () => {
  loginPage.loginOK();
})


// Cenário: Acesso negado
Given('que eu queira acessar a Biblioteca TOTVS', () => {
  loginPage.acessarHomePage();
})

When('eu inserir o login {string} e senha {string} inválidos', (login, senha) => {
  loginPage.preencherLogin(login, senha);
})

When('clicar no botão entrar', () => {
  cy.wait(2000);
  loginPage.clicarBtn();
})

Then('tenho o acesso negado', () => {
  loginPage.loginNOK();
})
