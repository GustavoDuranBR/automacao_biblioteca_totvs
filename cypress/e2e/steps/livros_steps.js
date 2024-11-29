/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LivroPage from "../pages/livros_page"

const livroPage = new LivroPage()

Given('eu esteja na página Home', () => {
    livroPage.acessarHomePage()
})

When('clico na opção Cadastro Livros no menu lateral', () => {
    livroPage.selecionarCadastroLivroWidget()
})

When('sou direcionado para a página Cadastro Livro', () => {
    livroPage.acessarPaginaLivro()
})

When('clico no campo Data da Publicação', () => {
    livroPage.dataPublicacaoSelector().click()
})

When('preencho o campo Data Publicação com a data {string}', (dataPub) => {
    livroPage.dataPublicacaoSelector().type(dataPub)
})

When('clico no campo Data da Inclusão', () => {
    livroPage.dataInclusaoSelector().click()
})

When('preencho o campo Data Inclusão com a data {string}', (dataInc) => {
    livroPage.dataInclusaoSelector().type(dataInc)
})

When('clico no campo Disponível', () => {
    livroPage.selectDisponivel().click()
})

When('seleciono {string} no campo Disponível', (disponivel) => {
    livroPage.selecionarDisponibilidade().type(disponivel)
})

When('clico no campo Título do Livro', () => {
    livroPage.selectTituloLivro().click()
})

When('preencho o campo com o título {string}', (titulo) => {
    livroPage.selectTituloLivro().type(titulo)
})

When('clico no campo Autor', () => {
    livroPage.campoAutor().click()
})

When('seleciono o autor {string}', (autor) => {
    livroPage.campoAutor().type(autor)
})

When('clico no campo Editora', () => {
    livroPage.campoEditora().click()
})

When('preencho o campo com a editora {string}', (editora) => {
    livroPage.campoEditora().type(editora)
})

When('clico no campo Observações', () => {
    livroPage.selectObs().click()
})

When('preencho o campo Observações com {string}', (obs) => {
    livroPage.selectObs().type(obs)
})

// Cenário: Cadastrar Livro sem preencher o campo Título
When('deixo o campo Título do Livro em branco', () => {
    livroPage.selectTituloLivro().clear()
})

// Cenário: Cadastrar Livro sem preencher o campo Autor
When('deixo o campo Autor em branco', () => {
    livroPage.campoAutor().clear()
})

// Cenário: Cadastrar Livro sem preencher o campo Editora
When('deixo o campo Editora em branco', () => {
    livroPage.campoEditora().clear()
})

// Clicar no botão Salvar
When('clico no Botão Salvar', () => {
    livroPage.botaoSalvar().click()  // Clica no botão salvar
})

Then('o sistema exibe a mensagem {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible')  // Verifica se a mensagem aparece
})
