/// <reference types="Cypress" />
import HomeElements from "../elements/home_elements";

const homeElements = new HomeElements;
const url = Cypress.config('baseUrl');

class HomePage {
    acessarHomePage() {
        cy.visit(url, '/home');
    }

    cadastrarAutorMenuLateral() {
        cy.get(homeElements.cadastroAutoresMenu()).click()
    }

    cadastrarAutorWidget() {
        cy.get(homeElements.cadastroAutoresWidget()).click()
    }
}

export default HomePage;
