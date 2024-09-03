import HomeElements from "../elements/home_elements";
const homeElements = new HomeElements;
const url = Cypress.config('baseUrl');

class HomePage {
  acessarHomePage() {
    cy.visit(Cypress.env('frontendUrl') + '/home')
  }

  selecionarCadastroAutorMenuLateral() {
    cy.get(homeElements.cadastroAutoresMenu()).click({force: true})
  }

  selecionarCadastroAutorWidget() {
    cy.get(homeElements.cadastroAutoresWidget()).click({force:true})

}
}
export default HomePage;
