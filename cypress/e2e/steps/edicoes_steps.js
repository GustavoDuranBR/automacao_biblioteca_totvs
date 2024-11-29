/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps"
import AutorPage from "../pages/autores_page"
import LivroPage from "../pages/livros_page" // Adicionar o import da página de Livros

const autorPage = new AutorPage()
const livroPage = new LivroPage()

// Edição de Autor

Given('eu esteja na página Home', () => {
    autorPage.acessarHomePage()
})

When('clico na opção Cadastro de Autores no menu lateral', () => {
    autorPage.selecionarCadastroAutorWidget()
})

When('sou direcionado para a página Cadastro Autor', () => {
    autorPage.acessarPaginaAutor()
})

When('clico no botão de opções', () => {
    autorPage.identificarAutor()
})

When('seleciono a opção editar', () => {
    autorPage.editarAutor()
})

When('clico no campo Nome do Autor', () => {
    autorPage.nomeAutor()
})

When('mudo o nome para {string}', (nomeEditado) => {
    autorPage.nomeAutor().type(nomeEditado)
})

// Clicar no botão Salvar para Autor
When('clico no botão Salvar', () => {
    autorPage.botaoSalvar().click()
})

// Mensagem ao finalizar edição do Autor
Then('o sistema exibe a mensagem {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible')
})


// Edição de Livro

When('clico na opção Cadastro Livros no menu lateral', () => {
    livroPage.selecionarCadastroLivroWidget()
})

When('sou direcionado para a página Cadastro Livro', () => {
    livroPage.acessarPaginaLivro()
})

When('clico no botão de opções', () => {
    livroPage.identificarLivro()
})

When('seleciono a opção editar', () => {
    livroPage.editarLivro()
})

When('clico no campo Disponível', () => {
    livroPage.selecionarDisponibilidade()
})

When('seleciono {string} no campo Disponível', (disponivel) => {
    livroPage.selecionarDisponibilidade(disponivel)
})

// Mensagem ao finalizar edição do Livro
Then('o sistema exibe a mensagem {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible')
})
