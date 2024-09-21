import AutorElements from "../elements/autores_elements";
import HomeElements from "../elements/home_elements";

const autorElements = new AutorElements;
const homeElements = new HomeElements;


class AutorPage {
  acessarHomePage() {
    cy.visit(Cypress.env('frontendUrl') + '/home')
  }

  selecionarCadastroAutorMenuLateral() {
    return cy.get(homeElements.cadastroAutoresMenu()).click({force:true})
  }

  selecionarCadastroAutorWidget() {
    return cy.get(homeElements.cadastroAutoresWidget()).click({force:true})
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
}
export default AutorPage;
