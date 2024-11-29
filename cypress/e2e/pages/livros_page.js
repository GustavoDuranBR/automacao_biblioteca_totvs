import LivrosElements from '../elements/livros_elements'
import HomeElements from '../elements/home_elements'

const livrosElements = new LivrosElements()
const homeElements = new HomeElements()

class LivroPage {
    // Acessa a página inicial (Home)
    acessarHomePage() {
        cy.visit(Cypress.env('frontendUrl') + '/home')
    }

    // Seleciona o item "Cadastro de Livros" no menu lateral
    selecionarCadastroLivroMenuLateral() {
        return cy.get(homeElements.cadastroLivrosMenu()).click({ force: true })
    }

    // Seleciona o widget "Cadastro de Livros"
    selecionarCadastroLivroWidget() {
        return cy.get(homeElements.cadastroLivrosWidget()).click({ force: true })
    }

    // Acessa a página de cadastro de livros
    acessarPaginaLivro() {
        return cy.get(livrosElements.paginaLivros())
            .should('contain.text', 'Cadastro Livro')
    }

    dataPublicacaoSelector() {
        return cy.get(livrosElements.dataPublic())
    }

    preencherDataPublicacao() {
        return cy.get(this.dataPublicacaoSelector()).find('input')
    }
    
    dataInclusaoSelector() {
        return cy.get(livrosElements.dataInclu())
    }

    preencherDataInclusao() {
        return cy.get(this.dataInclusaoSelector()).find('input')
    }

    // Identifica o livro com base no título e interage com o botão de ações
    identificarLivro(titulo) {
        return cy.get('tbody').contains('td', titulo).then(($el) => {
            const row = $el.parents('tr')
            cy.wrap(row).find(livrosElements.btnActions()).click({ force: true })
        })
    }

    // Identifica o livro editado e interage com o botão de ações
    identificarLivroEditado(tituloEditado) {
        return cy.get('tbody').contains('td', tituloEditado).then(($el) => {
            const row = $el.parents('tr')
            cy.wrap(row).find(livrosElements.btnActions()).click({ force: true })
        })
    }

    // Seleciona a opção de editar o livro
    editarLivro() {
        return cy.get(livrosElements.btnEditar()).click({ force: true })
    }

    // Seleciona a opção de excluir o livro
    excluirLivroEditado() {
        return cy.get(livrosElements.btnExcluir()).click({ force: true })
    }

    selectTituloLivro() {
        return cy.get(livrosElements.tituloLivro())
    }
   
    campoAutor() {
        return cy.get(livrosElements.autorCombo())
    }

    selectAutor() {
        return cy.get('po-item-list.ng-star-inserted')
        .contains('Robert C. Martin (Uncle Bob)').click();
    }

    campoEditora() {
        return cy.get(livrosElements.editora())
    }

    selectObs() {
        return cy.get(livrosElements.obs())
    }

    selectDisponivel() {
        return cy.get(livrosElements.disponivel()).click();
    }

    // Seleciona a disponibilidade do livro
    selecionarDisponibilidade() {
        cy.get(this.selectDisponivel());    
        cy.get('po-item-list div span')
            .contains('Sim').click(); // Clica na opção
    }     

    // Clica no botão de salvar
    botaoSalvar() {
        return cy.get(livrosElements.btnSalvar())
    }

    // Clica no botão de cancelar
    botaoCancelar() {
        return cy.get(livrosElements.btnCancelar())
    }
}

export default LivroPage;
