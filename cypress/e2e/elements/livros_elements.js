class LivrosElements {
    paginaLivros () {
      return '[data-cy=titleBook]'
    }

    dataPublic () {
        return '[data-cy=datePublish]'
    }

    dataInclu () {
        return '[data-cy=dateInclude]'
    }

    disponivel () {
        return '[data-cy=comboDisponivel]'
    }

    tituloLivro () {
        return '[data-cy="inputTitleBook"] input'
    }

    autorCombo () {
        return '[data-cy=comboAutor]'
    }

    editora () {
        return '[data-cy=inputEditora]'
    }

    obs () {
        return '[data-cy=inputObservations]'
    }

    btnCancelar () {
        return '[data-cy=btnCancel]'
    }

    btnSalvar () {
        return '[data-cy=btnSave]'
    }

    // Botões sem data-cy
    btnGerenciadorColunas() {
        return '.ng-star-inserted.po-table-actions-column-manager > po-button > .po-button'
    }

    btnActions() {
        return '.po-clickable.po-icon.po-icon-more'
    }

    btnEditar() {
        return 'li:nth-of-type(1) > .ng-star-inserted > .ng-star-inserted.po-item-list.po-item-list__action'
    }

    btnExcluir() {
        return 'li:nth-of-type(2) > .ng-star-inserted > .ng-star-inserted.po-item-list.po-item-list__action'
    }

  }
  export default LivrosElements;
  