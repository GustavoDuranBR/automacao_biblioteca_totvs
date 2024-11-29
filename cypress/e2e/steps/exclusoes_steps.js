/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps"
import AutorPage from "../pages/autores_page"
import LivroPage from "../pages/livros_page"

const autorPage = new AutorPage()
const livroPage = new LivroPage()

// Excluir o autor cadastrado
When('clico no botão de opções', () => {
    autorPage.identificarAutor()
})

When('seleciono a opção excluir', () => {
    autorPage.excluirAutorEditado()
})

// Excluir o livro cadastrado
When('clico no botão de opções', () => {
    livroPage.identificarLivro()
})

When('seleciono a opção excluir', () => {
    livroPage.excluirLivroEditado()
})

// Mensagem ao finalizar exclusão
Then('o sistema exibe a mensagem {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible')
})
