class AutorElements {
    nomeAutor= () => {
        return 'input[name="author"]'
    }

    nacionalidade = () => {
        return 'input[name="nacionalidade"]'
    }

    btnSalvar = () => {
        return 'po-button:nth-of-type(2) > .po-button'
    }

    btnCancelar = () => {
        return '.button-wrapper > po-button:nth-of-type(1) > .po-button'
    }

    btnGerenciadorColunas = () => {
        return '.ng-star-inserted.po-table-actions-column-manager > po-button > .po-button'
    }

    btnActions = () => {
        return '.ng-star-inserted.po-table-column-actions'
    }

    btnEditar = () => {
        return 'li:nth-of-type(1) > .ng-star-inserted > .ng-star-inserted.po-item-list.po-item-list__action'
    }

    btnExcluir = () => {
        return 'li:nth-of-type(2) > .ng-star-inserted > .ng-star-inserted.po-item-list.po-item-list__action'
    }

} export default AutorElements;
