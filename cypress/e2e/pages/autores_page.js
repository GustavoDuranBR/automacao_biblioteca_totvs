import AutorElements from "../elements/autores_elements";
import HomeElements from "../elements/home_elements";

const autorElements = new AutorElements;
const homeElements = new HomeElements;


class AutorPage {
  acessarHomePage() {
    cy.visit(Cypress.env('frontendUrl') + '/home')
  }

  selecionarCadastroAutorMenuLateral() {
    return cy.get(homeElements.cadastroAutoresMenu()).click({ force: true })
  }

  selecionarCadastroAutorWidget() {
    return cy.get(homeElements.cadastroAutoresWidget()).click({ force: true })
  }

  acessarPaginaAutor() {
    return cy.get(autorElements.paginaAutores())
      .should('contain.text', 'Cadastro de Autor')
  }

  nomeAutor() {
    return cy.get(autorElements.campoNome()).find('input')
  }

  nacionalidadeAutor() {
    return cy.get(autorElements.campoNacionalidade()).find('input')
  }

  botaoSalvar() {
    return cy.get(autorElements.btnSalvar())
  }

  identificarAutor() {
    return cy.get('tbody').contains('td', 'Robert C. Martin').then(($el) => {
      const row = $el.parents('tr')
      cy.wrap(row).find(autorElements.btnActions()).click({ force: true })
    })
  }

  identificarAutorEditado() {
    return cy.get('tbody').contains('td', 'Robert C. Martin (Uncle Bob)').then(($el) => {
      const row = $el.parents('tr')
      cy.wrap(row).find(autorElements.btnActions()).click({ force: true })
    })
  }

  editarAutor() {
    cy.get(autorElements.btnEditar()).click({ force: true });
  }

  excluirAutorEditado() {
    return cy.get(autorElements.btnExcluir()).click({ force: true })
  }
}
export default AutorPage;
