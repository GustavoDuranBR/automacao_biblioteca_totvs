/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import AutorPage from "../pages/autores_page"

const autorPage = new AutorPage()

Given('eu esteja na página Home', () => {
    autorPage.acessarHomePage()
})

When('clico na opção Cadastro de Autores no menu lateral', () => {
    autorPage.selecionarCadastroAutorWidget()
})

When('sou direcionado para a página Cadastro Autor', () => {
    autorPage.acessarPaginaAutor()
})

When('clico no campo Nome do Autor', () => {
    autorPage.nomeAutor()   
})

When('preencho o campo selecionado com o nome {string}', (nome) => {
    autorPage.nomeAutor().type(nome)
})

When('clico no campo Nacionalidade', () => {
    autorPage.nacionalidadeAutor()
})

When('preencho o campo selecionado com a nacionalidade {string}', (nacionalidade) => {
    autorPage.nacionalidadeAutor().type(nacionalidade)
})

// Cenário: Cadastrar Autor sem preencher o campo Nacionalidade
When('deixo o campo Nacionalidade em branco', () => {
    autorPage.nacionalidadeAutor().clear()
})

// Cenário: Cadastrar Autor sem preencher o campo Nome do Autor
When('deixo o campo Nome do Autor em branco', () => {
    autorPage.nomeAutor().clear()
})

// Cenário: Cadastrar Autor sem preencher os campos
When('deixo os campos Nome do Autor e Nacionalidade em branco', () => {
    autorPage.nomeAutor().clear()
    autorPage.nacionalidadeAutor().clear()
})

// Clicar no botão Salvar
When('clico no botão Salvar', () => {
    autorPage.botaoSalvar().click()
})

// Mensagem ao finalizar 
Then('o sistema exibe a mensagem {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible')
})
