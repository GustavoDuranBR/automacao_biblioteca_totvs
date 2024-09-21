import LoginElements from "../elements/login_elements";

const loginElements = new LoginElements;

class LoginPage {
    acessarHomePage() {
        cy.visit(Cypress.env('frontendUrl'))
    }

    preencherLogin(login, senha) {
        cy.get(loginElements.campoEmail()).type(login);
        cy.get(loginElements.campoSenha()).type(senha);
    }

    clicarBtn() {
        cy.get(loginElements.btnEntrar()).click();
    }

    loginOK() {
        cy.url().should('include', '/home');
        cy.get('.po-toolbar-title')
            .should('contain.text', 'Biblioteca Totvs')
            .and('be.visible');
    }

    loginNOK() {
        cy.get('body').then(($body) => {
            if ($body.find('.po-alert-message').length) {
                cy.get('.po-alert-message')
                    .should('contain.text', 'Usuário ou senha inválidos')
                    .and('be.visible');
            } else {
                throw new Error('Mensagem de erro não encontrada');
            }
        });
    }
}

export default LoginPage;
